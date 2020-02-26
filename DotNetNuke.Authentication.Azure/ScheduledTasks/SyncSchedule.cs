using DotNetNuke.Authentication.Azure.Components;
using DotNetNuke.Authentication.Azure.Components.Graph;
using DotNetNuke.Authentication.Azure.Components.Models;
using DotNetNuke.Authentication.Azure.Data;
using DotNetNuke.Common.Utilities;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Security.Roles;
using DotNetNuke.Services.Scheduling;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DotNetNuke.Authentication.Azure.ScheduledTasks
{
    public class SyncSchedule : SchedulerClient
    {
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
                var customRoleMappings = GetRoleMappingsForPortal(portalId, settings);

                if (string.IsNullOrEmpty(settings.AADApplicationId) || string.IsNullOrEmpty(settings.AADApplicationKey))
                {
                    throw new Exception($"AAD application ID or key are not valid on portal {portalId}");
                }

                var graphClient = new GraphClient(settings.AADApplicationId, settings.AADApplicationKey, settings.TenantId);

                // Add roles from AAD B2C
                var aadGroups = graphClient.GetAllGroups("");
                if (aadGroups != null && aadGroups.Values != null)
                {
                    var groupPrefix = settings.GroupNamePrefixEnabled ? "Azure-" : "";
                    var groups = aadGroups.Values;
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
                            // Create role
                            var roleId = AddRole(portalId, $"{groupPrefix}{aadGroup.DisplayName}", aadGroup.Description, true);
                        }
                    }
                }
                // Let's remove DNN roles imported from B2C that no longer exists in B2C
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
                // Remove roles no longer exists in AAD B2C (only the ones that are not mapped against a DNN role)
                foreach (var dnnRole in dnnAadRoles)
                {
                    if (aadGroups == null
                        || aadGroups.Values == null
                        || aadGroups.Values.FirstOrDefault(x => x.DisplayName == (dnnRole.RoleName.StartsWith("Azure-") ? dnnRole.RoleName.Substring("Azure-".Length) : dnnRole.RoleName)) == null)
                    {
                        RoleController.Instance.DeleteRole(dnnRole);
                        // This is a workaround to a bug in DNN where RoleSettings is not deleted when a role is deleted
                        DotNetNuke.Data.DataContext.Instance().Execute(System.Data.CommandType.Text, $"DELETE {DotNetNuke.Data.DataProvider.Instance().DatabaseOwner}{DotNetNuke.Data.DataProvider.Instance().ObjectQualifier}RoleSettings WHERE RoleID = @0", dnnRole.RoleID);
                    }
                }

                return $"Successfully synchronized portal {portalId}";
            }
            catch (Exception e)
            {
                return $"Error while synchronizing the roles from portal {portalId}: {e}";
            }
        }
    }
}
