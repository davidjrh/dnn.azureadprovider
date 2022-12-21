using DotNetNuke.Authentication.Azure.Common;
using DotNetNuke.Authentication.Azure.Components;
using DotNetNuke.Authentication.Azure.Components.Graph;
using DotNetNuke.Authentication.Azure.Components.Models;
using DotNetNuke.Authentication.Azure.Data;
using DotNetNuke.Common.Utilities;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Entities.Users;
using DotNetNuke.Instrumentation;
using DotNetNuke.Security.Roles;
using DotNetNuke.Services.Authentication;
using DotNetNuke.Services.FileSystem;
using DotNetNuke.Services.Scheduling;
using Microsoft.Graph;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.IO;
using System.Linq;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.StartPanel;

namespace DotNetNuke.Authentication.Azure.ScheduledTasks
{
    public class SyncSchedule : SchedulerClient
    {
        private static readonly ILog Logger = LoggerSource.Instance.GetLogger(typeof(SyncSchedule));

        private List<RoleMapping> _globalRoleMappings;
        public List<RoleMapping> GlobalRoleMappings
        {
            get
            {
                if (_globalRoleMappings == null)
                {
                    _globalRoleMappings = RoleMappingsRepository.Instance.GetRoleMappings(-1).ToList();
                }
                return _globalRoleMappings;
            }
        }

        public List<RoleMapping> GetRoleMappingsForPortal(int portalId, AzureConfig settings)
        {
            if (settings.UseGlobalSettings)
                return GlobalRoleMappings;
            else
                return RoleMappingsRepository.Instance.GetRoleMappings(portalId).ToList();
        }

        public SyncSchedule(ScheduleHistoryItem oItem) : base()
        {
            ScheduleHistoryItem = oItem;
        }

        public override void DoWork()
        {
            try
            {
                //Perform required items for logging
                Progressing();

                ScheduleHistoryItem.AddLogNote("Starting Azure AD Synchronization.\n");

                var portals = PortalController.Instance.GetPortalList(Null.NullString);
                foreach (var portal in portals)
                {
                    var settings = new AzureConfig(AzureConfig.ServiceName, portal.PortalID);
                    if (settings.Enabled)
                    {
                        if (settings.RoleSyncEnabled)
                        {
                            var message = SyncRoles(portal.PortalID, settings);
                            ScheduleHistoryItem.AddLogNote(message);
                        }
                        if (settings.UserSyncEnabled)
                        {
                            var message = SyncUsers(portal.PortalID, settings);
                            ScheduleHistoryItem.AddLogNote(message);
                        }
                    }
                }

                ScheduleHistoryItem.AddLogNote(string.Format("Azure AD Synchronization finished successfully.\n"));

                //Show success
                ScheduleHistoryItem.Succeeded = true;
            }
            catch (Exception ex)
            {
                ScheduleHistoryItem.Succeeded = false;
                ScheduleHistoryItem.AddLogNote(string.Format("Error performing Azure AD Synchronization: {0}.\n", ex.Message));

                Errored(ref ex);
                DotNetNuke.Services.Exceptions.Exceptions.LogException(ex);
            }
        }

        private int AddRole(int portalId, string roleName, string roleDescription)
        {
            var roleId = RoleController.Instance.AddRole(new RoleInfo
            {
                RoleName = roleName,
                Description = roleDescription,
                PortalID = portalId,
                Status = RoleStatus.Approved,
                RoleGroupID = -1,
                AutoAssignment = false,
                IsPublic = false
            });

            var role = RoleController.Instance.GetRoleById(portalId, roleId);
            role.Settings.Add(AzureClient.RoleSettingsAadPropertyName, AzureClient.RoleSettingsAadPropertyValue);
            RoleController.Instance.UpdateRoleSettings(role, true);

            return roleId;
        }

        private List<RoleInfo> GetDnnAadRoles(int portalId)
        {
            // This is the list of DNN roles coming from AAD
            return RoleController.Instance.GetRoles(portalId)
                .Where(r => r.Settings.ContainsKey(AzureClient.RoleSettingsAadPropertyName) && r.Settings[AzureClient.RoleSettingsAadPropertyName] == AzureClient.RoleSettingsAadPropertyValue)
                .ToList();
        }

        internal string SyncRoles(int portalId, AzureConfig settings)
        {
            try
            {
                var syncErrorsDesc = "";
                var syncErrors = 0;
                var groupsCreated = 0;
                var groupsDeleted = 0;
                var customRoleMappings = GetRoleMappingsForPortal(portalId, settings);

                if (string.IsNullOrEmpty(settings.AADApplicationId) || string.IsNullOrEmpty(settings.AADApplicationKey))
                {
                    throw new Exception($"AAD application ID or key are not valid on portal {portalId}");
                }

                var graphClient = new GraphClient(settings.AADApplicationId, settings.AADApplicationKey, settings.TenantId);
                // Add roles from AAD 
                var aadGroups = graphClient.GetAllGroups();
                var allaadGroups = new List<Microsoft.Graph.Group>();
                if (aadGroups != null)
                {
                    var groupPrefix = settings.GroupNamePrefixEnabled ? $"{AzureConfig.ServiceName}-" : "";
                    while (aadGroups != null && aadGroups.Count > 0)
                    {
                        var groups = aadGroups.CurrentPage.ToList();
                        allaadGroups.AddRange(groups);
                        if (customRoleMappings != null && customRoleMappings.Count > 0)
                        {
                            groupPrefix = "";
                            var b2cRoles = customRoleMappings.Select(rm => rm.AadRoleName);
                            groups.RemoveAll(x => !b2cRoles.Contains(x.DisplayName));
                        }

                        foreach (var aadGroup in groups)
                        {
                            var displayName = $"{groupPrefix}{aadGroup.DisplayName}";
                            var mapping = customRoleMappings?.FirstOrDefault(x => x.AadRoleName == aadGroup.DisplayName);
                            if (mapping != null)
                            {
                                displayName = mapping.DnnRoleName;
                            }

                            var dnnRole = RoleController.Instance.GetRoleByName(portalId, displayName);
                            if (dnnRole == null)
                            {
                                try
                                {
                                    // Create role
                                    var roleId = AddRole(portalId, displayName, aadGroup.Description);
                                    groupsCreated++;
                                }
                                catch (Exception ex)
                                {
                                    syncErrors++;
                                    syncErrorsDesc += $"\n{ex.Message}";
                                }
                            }
                        }
                        aadGroups = aadGroups.NextPageRequest?.GetSync();
                    }                    
                }
                // Let's remove DNN roles imported from B2C that no longer exists in AAD
                var dnnAadRoles = GetDnnAadRoles(portalId);
                // Let's exclude first the mapped roles (we won't remove mapped roles)
                foreach (var role in customRoleMappings)
                {
                    var mappedRole = dnnAadRoles.FirstOrDefault(ri => ri.RoleName == role.DnnRoleName);
                    if (mappedRole != null)
                    {
                        dnnAadRoles.Remove(mappedRole);
                    }
                }
                // Remove roles no longer exists in AAD (only the ones that are not mapped against a DNN role)
                foreach (var dnnRole in dnnAadRoles)
                {
                    if (allaadGroups.Count == 0
                        || allaadGroups.FirstOrDefault(x => x.DisplayName == 
                            (settings.GroupNamePrefixEnabled 
                                ? dnnRole.RoleName.Substring($"{AzureConfig.ServiceName}-".Length) 
                                : dnnRole.RoleName)) == null)
                    {
                        try
                        {
                            RoleController.Instance.DeleteRole(dnnRole);
                            // This is a workaround due to a bug in DNN where RoleSettings are not deleted when a role is deleted
                            DotNetNuke.Data.DataContext.Instance().Execute(System.Data.CommandType.Text, $"DELETE {DotNetNuke.Data.DataProvider.Instance().DatabaseOwner}{DotNetNuke.Data.DataProvider.Instance().ObjectQualifier}RoleSettings WHERE RoleID = @0", dnnRole.RoleID);
                            groupsDeleted++;
                        }
                        catch (Exception ex)
                        {
                            syncErrors++;
                            syncErrorsDesc += $"\n{ex.Message}";
                        }
                    }
                }

                var syncResultDesc = "";
                var syncResultStats = $"sync errors: {syncErrors}; groups created: {groupsCreated}; groups deleted: {groupsDeleted}";
                if (!string.IsNullOrEmpty(syncErrorsDesc))
                {
                    Logger.Error($"AAD Role Sync errors detected: {syncErrorsDesc}");
                    syncResultDesc = $"Portal {portalId} synced with errors, check logs for more information ({syncResultStats}).\n";
                }
                else
                {
                    syncResultDesc = $"Successfully synchronized portal {portalId} ({syncResultStats}).\n";                    
                }
                return syncResultDesc;
            }
            catch (Exception e)
            {
                string message = $"Error while synchronizing the roles from portal {portalId}: {e}.\n";
                Logger.Error(message);
                return message;
            }
        }

        private UserInfo AddUser(int portalId, string userName, string displayName, string firstName, string lastName, string eMail)
        {
            var user = new UserInfo()
            {
                PortalID = portalId,
                Username = userName,
                DisplayName = displayName,
                FirstName = firstName,
                LastName = lastName,
                Email = eMail,
                Membership = new UserMembership()
                {
                    Password = Guid.NewGuid().ToString(),
                    PasswordQuestion = String.Empty,
                    PasswordAnswer = String.Empty
                },
                Profile = new UserProfile()
                {
                    FirstName = firstName,
                    LastName = lastName,
                }
            };

            var userCreateStatus = UserController.CreateUser(ref user, false);
            if (userCreateStatus != Security.Membership.UserCreateStatus.Success)
            {
                Logger.Error($"Error creating user {userName} on portal {portalId}: {userCreateStatus}");
                return null;
            }
            else
            {
                AuthenticationController.AddUserAuthentication(user.UserID, AzureConfig.ServiceName, userName);
                UserController.AddUserPortal(portalId, user.UserID);
                return user;
            }
        }

        private void UpdateUserProfilePicture(GraphClient graphClient, string aadUserId, UserInfo userInfo, bool saveUserInfo = false)
        {
            try
            {
                if (!string.IsNullOrEmpty(aadUserId) && userInfo != null)
                {
                    var profilePictureMetadata = graphClient.GetUserProfilePictureMetadata(aadUserId);
                    if (profilePictureMetadata != null && profilePictureMetadata.AdditionalData.ContainsKey("@odata.mediaContentType"))
                    {
                        var pictureBytes = graphClient.GetUserProfilePicture(aadUserId);
                        var userFolder = FolderManager.Instance.GetUserFolder(userInfo);
                        var stream = new MemoryStream(pictureBytes);
                        var profilePictureInfo = FileManager.Instance.AddFile(userFolder,
                            $"{aadUserId}.{AzureClient.GetExtensionFromMediaContentType(profilePictureMetadata.AdditionalData["@odata.mediaContentType"].ToString())}",
                            stream, true);

                        userInfo.Profile.Photo = profilePictureInfo.FileId.ToString();
                    }
                    if (saveUserInfo)
                    {
                        AuthenticationController.AddUserAuthentication(userInfo.UserID, AzureConfig.ServiceName, userInfo.Username);
                        UserController.UpdateUser(userInfo.PortalID, userInfo);
                    }
                }
            }
            catch (Exception e)
            {
                Logger.Warn($"Error while synchronizing user profile picture from user {aadUserId}", e);
            }
        }

        private UserInfo UpdateUser(UserInfo user, int portalId, string userName, string displayName, string firstName, string lastName, string eMail)
        {
            user.PortalID = portalId;
            user.Username = userName;
            user.DisplayName = displayName;
            user.FirstName = firstName;
            user.LastName = lastName;
            user.Email = eMail;
            user.Profile.FirstName = firstName;
            user.Profile.LastName = lastName;

            AuthenticationController.AddUserAuthentication(user.UserID, AzureConfig.ServiceName, userName);
            UserController.UpdateUser(portalId, user);
            return user;
        }

        internal string SyncUsers(int portalId, AzureConfig settings)
        {
            try
            {
                var syncErrorsDesc = "";
                var syncErrors = 0;
                var usersCreated = 0;
                var usersUpdated = 0;

                if (string.IsNullOrEmpty(settings.AADApplicationId) || string.IsNullOrEmpty(settings.AADApplicationKey))
                {
                    throw new Exception($"AAD application ID or key are not valid on portal {portalId}");
                }

                var graphClient = new GraphClient(settings.AADApplicationId, settings.AADApplicationKey, settings.TenantId);
                var userMappings = UserMappingsRepository.Instance.GetUserMappings(portalId).ToList();

                // Add users from AAD 
                var aadUsers = graphClient.GetAllUsers();
                var allAadUsers = new List<Microsoft.Graph.User>();
                if (aadUsers != null)
                {
                    var userPrefix = settings.UsernamePrefixEnabled ? $"{AzureConfig.ServiceName}-" : "";
                    while (aadUsers != null && aadUsers.Count > 0)
                    {
                        var users = aadUsers.CurrentPage.ToList();
                        allAadUsers.AddRange(users);

                        foreach (var aadUser in users)
                        {
                            try
                            {
                                // TODO?: Comprobar si se pueden fusionar los tries
                                // TODO?: Meter aadUser como parametro directamente                                
                                var userName =  $"{userPrefix}{GetPropertyValueByClaimName(aadUser, userMappings.FirstOrDefault(x => x.DnnPropertyName == "Id")?.AadClaimName)}";
                                var displayName = GetPropertyValueByClaimName(aadUser, userMappings.FirstOrDefault(x => x.DnnPropertyName == "DisplayName")?.AadClaimName);
                                var firstName = GetPropertyValueByClaimName(aadUser, userMappings.FirstOrDefault(x => x.DnnPropertyName == "FirstName")?.AadClaimName); 
                                var lastName = GetPropertyValueByClaimName(aadUser, userMappings.FirstOrDefault(x => x.DnnPropertyName == "LastName")?.AadClaimName);
                                var eMail = GetPropertyValueByClaimName(aadUser, userMappings.FirstOrDefault(x => x.DnnPropertyName == "Email")?.AadClaimName);

                                // If no first name, try and get it from the display name.
                                if (string.IsNullOrEmpty(firstName))
                                {
                                    firstName = Utils.GetFirstName(displayName);
                                }
                                // If no last name, try and get it from the display name.
                                if (string.IsNullOrEmpty(lastName))
                                {
                                    lastName = Utils.GetLastName(displayName);
                                }

                                var dnnUser = UserController.GetUserByName(portalId, userName);
                                if (dnnUser == null)
                                {
                                    dnnUser = AddUser(portalId, userName, displayName, firstName, lastName, eMail);
                                    usersCreated++;
                                }
                                else
                                {
                                    dnnUser = UpdateUser(dnnUser, portalId, userName, displayName, firstName, lastName, eMail);
                                    usersUpdated++;
                                }
                                if (dnnUser != null && settings.ProfileSyncEnabled)
                                {
                                    UpdateUserProfilePicture(graphClient, aadUser.Id, dnnUser, true);
                                }
                            }
                            catch (Exception ex)
                            {
                                syncErrors++;
                                syncErrorsDesc += $"\n{ex.Message}";
                            }
                        }
                        aadUsers = aadUsers.NextPageRequest?.GetSync();
                    }
                }

                string syncResultDesc = "";
                string syncResultStats = $"sync errors: {syncErrors}; users created: {usersCreated}; users updated: {usersUpdated}";
                if (!string.IsNullOrEmpty(syncErrorsDesc))
                {
                    Logger.Error($"AAD User Sync errors detected: {syncErrorsDesc}");
                    syncResultDesc = $"Portal {portalId} synced with errors, check logs for more information ({syncResultStats}).\n";
                }
                else
                {
                    syncResultDesc = $"Successfully synchronized portal {portalId} ({syncResultStats}).\n";
                }
                return syncResultDesc;
            }
            catch (Exception e)
            {
                string message = $"Error while synchronizing the users from portal {portalId}: {e}.\n";
                Logger.Error(message);
                return message;
            }
        }

        private string GetPropertyValueByClaimName(Microsoft.Graph.User user, string claimName)
        {
            switch (claimName.ToLowerInvariant())
            {
                case "unique_name":
                case "upn":
                    return user.UserPrincipalName;
                case "given_name":
                    return user.GivenName;
                case "family_name":
                    return user.Surname;
                case "name":
                    return user.DisplayName;
                case "emails":
                case "email":
                case "mail":
                    return user.Mail ?? user.OtherMails?.FirstOrDefault();
                case "oid":
                case "sub":
                    return user.Id;
                default: return "";
            }
        }
    }
}
