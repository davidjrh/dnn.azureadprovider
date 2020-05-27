using DotNetNuke.Authentication.Azure.Components;
using DotNetNuke.Authentication.Azure.Components.Graph;
using DotNetNuke.Authentication.Azure.Components.Models;
using DotNetNuke.Authentication.Azure.Data;
using DotNetNuke.Common.Utilities;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Instrumentation;
using DotNetNuke.Security.Roles;
using DotNetNuke.Services.Scheduling;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;

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

                ScheduleHistoryItem.AddLogNote("Starting Azure AD Synchronization\n");

                var portals = PortalController.Instance.GetPortalList(Null.NullString);
                foreach (var portal in portals)
                {
                    var settings = new AzureConfig(AzureConfig.ServiceName, portal.PortalID);
                    if (settings.Enabled && settings.RoleSyncEnabled)
                    {
                        var message = SyncRoles(portal.PortalID, settings);
                        ScheduleHistoryItem.AddLogNote(message);
                    }
                }

                ScheduleHistoryItem.AddLogNote(string.Format("Azure AD Synchronization finished successfully\n"));

                //Show success
                ScheduleHistoryItem.Succeeded = true;
            }
            catch (Exception ex)
            {
                ScheduleHistoryItem.Succeeded = false;
                ScheduleHistoryItem.AddLogNote(string.Format("Error performing Azure AD Synchronization: {0}\n", ex.Message)); ;

                Errored(ref ex);
                DotNetNuke.Services.Exceptions.Exceptions.LogException(ex);
            }
        }

        private int AddRole(int portalId, string roleName, string roleDescription, bool isFromB2c)
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

            if (isFromB2c)
            {
                var role = RoleController.Instance.GetRoleById(portalId, roleId);
                role.Settings.Add(AzureClient.RoleSettingsAadPropertyName, AzureClient.RoleSettingsAadPropertyValue);
                RoleController.Instance.UpdateRoleSettings(role, true);
            }

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
                var query = "$orderby=displayName";
                var filter = ConfigurationManager.AppSettings["AzureAD.GetAllGroups.Filter"];
                if (!string.IsNullOrEmpty(filter))
                {
                    query = $"$filter={filter}";
                }
                // Add roles from AAD 
                var aadGroups = graphClient.GetAllGroups(query);
                var allaadGroups = new List<Components.Graph.Models.Group>();
                if (aadGroups != null && aadGroups.Values != null)
                {
                    var groupPrefix = settings.GroupNamePrefixEnabled ? "Azure-" : "";
                    while (aadGroups.Values.Count > 0)
                    {
                        var groups = aadGroups.Values;
                        allaadGroups.AddRange(groups);
                        if (customRoleMappings != null && customRoleMappings.Count > 0)
                        {
                            groupPrefix = "";
                            var b2cRoles = customRoleMappings.Select(rm => rm.AadRoleName);
                            groups.RemoveAll(x => !b2cRoles.Contains(x.DisplayName));
                        }

                        foreach (var aadGroup in groups)
                        {
                            var dnnRole = RoleController.Instance.GetRoleByName(portalId, $"{groupPrefix}{aadGroup.DisplayName}");
                            if (dnnRole == null)
                            {
                                try
                                {
                                    // Create role
                                    var roleId = AddRole(portalId, $"{groupPrefix}{aadGroup.DisplayName}", aadGroup.Description, true);
                                    groupsCreated++;
                                }
                                catch (Exception ex)
                                {
                                    syncErrors++;
                                    syncErrorsDesc += $"\n{ex.Message}";
                                }
                            }
                        }

                        if (string.IsNullOrEmpty(aadGroups.ODataNextLink))
                            break;
                        aadGroups = graphClient.GetNextGroups(aadGroups.ODataNextLink);
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
                        || allaadGroups.FirstOrDefault(x => x.DisplayName == (dnnRole.RoleName.StartsWith("Azure-") ? dnnRole.RoleName.Substring("Azure-".Length) : dnnRole.RoleName)) == null)
                    {
                        try
                        {
                            RoleController.Instance.DeleteRole(dnnRole);
                            // This is a workaround to a bug in DNN where RoleSettings is not deleted when a role is deleted
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
                if (!string.IsNullOrEmpty(syncErrorsDesc))
                {
                    Logger.Error($"AAD Role Sync errors detected: {syncErrorsDesc}");
                    syncResultDesc = $"Portal {portalId} synced with errors, check logs for more information (sync errors: {syncErrors}; groups created: {groupsCreated}; groups deleted: {groupsDeleted}";
                }
                else
                {
                    syncResultDesc = $"Successfully synchronized portal {portalId} (sync errors: 0; groups created: {groupsCreated}; groups deleted: {groupsDeleted}";                    
                }
                return syncResultDesc;
            }
            catch (Exception e)
            {
                Logger.Error($"Error while synchronizing the roles from portal {portalId}: {e}");
                return $"Error while synchronizing the roles from portal {portalId}: {e}";
            }
        }
    }
}
