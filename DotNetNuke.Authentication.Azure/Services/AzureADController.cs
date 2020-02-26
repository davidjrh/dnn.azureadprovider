#region Copyright

// 
// Intelequia Software solutions - https://intelequia.com
// Copyright (c) 2010-2017
// by Intelequia Software Solutions
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
// documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
// the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and 
// to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all copies or substantial portions 
// of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
// TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
// THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
// CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
// DEALINGS IN THE SOFTWARE.

#endregion

using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Dnn.PersonaBar.Library;
using Dnn.PersonaBar.Library.Attributes;
using DotNetNuke.Instrumentation;
using DotNetNuke.Web.Api;
using DotNetNuke.Authentication.Azure.Components;
using DotNetNuke.Authentication.Azure.Data;
using System.Linq;
using DotNetNuke.Security.Roles;
using System.Collections.Generic;
using DotNetNuke.Entities.Profile;

namespace DotNetNuke.Authentication.Azure.Services
{
    [MenuPermission(Scope = ServiceScope.Host)]
    public class AzureADController : PersonaBarApiController
    {
        private static readonly ILog Logger = LoggerSource.Instance.GetLogger(typeof(AzureADController));

        /// GET: api/AzureAD/GetSettings
        /// <summary>
        /// Gets the settings
        /// </summary>
        /// <returns>settings</returns>
        [HttpGet]
        public HttpResponseMessage GetSettings()
        {
            try
            {
                var settings = AzureADProviderSettings.LoadSettings("Azure", PortalId);
                return Request.CreateResponse(HttpStatusCode.OK, settings);
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        private void PrepareUserMappingsForCurrentPortal()
        {
            var userMappings = UserMappingsRepository.Instance.GetUserMappings(PortalId);
            if (userMappings.Count() == 0)
            {
                userMappings = UserMappingsRepository.Instance.GetUserMappings(-1); // Let's create user mappings based on Portal -1
                foreach (var userMapping in userMappings)
                {
                    UserMappingsRepository.Instance.InsertUserMapping(userMapping.DnnPropertyName, userMapping.AadClaimName, PortalId);
                }
            }

            var profileMappings = ProfileMappingsRepository.Instance.GetProfileMappings(PortalId);
            if (profileMappings.Count() == 0)
            {
                profileMappings = ProfileMappingsRepository.Instance.GetProfileMappings(-1);
                foreach (var profileMapping in profileMappings)
                {
                    ProfileMappingsRepository.Instance.InsertProfileMapping(profileMapping.DnnProfilePropertyName, profileMapping.AadClaimName, PortalId);
                }
            }

            var roleMappings = RoleMappingsRepository.Instance.GetRoleMappings(PortalId);
            if (roleMappings.Count() == 0)
            {
                roleMappings = RoleMappingsRepository.Instance.GetRoleMappings(-1);
                foreach (var roleMapping in roleMappings)
                {
                    RoleMappingsRepository.Instance.InsertRoleMapping(roleMapping.DnnRoleName, roleMapping.AadRoleName, PortalId);
                }
            }
        }


        // POST: api/RedisCaching/UpdateSettings
        /// <summary>
        /// Updates the settings
        /// </summary>
        /// <param name="settings"></param>
        /// <returns></returns>
        [HttpPost]
        [ValidateAntiForgeryToken]
        public HttpResponseMessage UpdateGeneralSettings(AzureADProviderSettings settings)
        {
            try
            {
                var config = new AzureConfig(AzureConfig.ServiceName, PortalId);
                if (!UserInfo.IsSuperUser)
                {
                    if (config.UseGlobalSettings || config.UseGlobalSettings != settings.UseGlobalSettings)
                        return Request.CreateResponse(HttpStatusCode.Forbidden, "Only super users can change this setting");
                }

                AzureADProviderSettings.SaveGeneralSettings(AzureConfig.ServiceName, PortalId, settings);

                // If UseGlobalSettigns was set to false, we have to create mappings if there're no mappings for the current portal
                if (config.UseGlobalSettings != settings.UseGlobalSettings && settings.UseGlobalSettings == false)
                {
                    PrepareUserMappingsForCurrentPortal();
                }
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        private int GetCalculatedPortalId()
        {
            var settings = new AzureConfig(AzureConfig.ServiceName, PortalId);
            return settings.UseGlobalSettings ? -1 : PortalId;
        }

        [HttpGet]
        [ValidateAntiForgeryToken]
        public HttpResponseMessage GetProfileSettings()
        {
            try
            {
                var profileSettings = ProfileMappingsRepository.Instance.GetProfileMappings(GetCalculatedPortalId())
                                        .Select((mapping, index) => new {
                                            mapping.DnnProfilePropertyName,
                                            mapping.AadClaimName
                                        }
                            );

                return Request.CreateResponse(HttpStatusCode.OK, profileSettings);
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        [HttpGet]
        [ValidateAntiForgeryToken]
        public HttpResponseMessage GetRoleMappingSettings()
        {
            try
            {
                var roleMappings = RoleMappingsRepository.Instance.GetRoleMappings(GetCalculatedPortalId())
                        .Select((mapping, index) => new
                        {
                            mapping.DnnRoleName,
                            mapping.AadRoleName
                        }
                        );

                return Request.CreateResponse(HttpStatusCode.OK, roleMappings);
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        [HttpGet]
        [ValidateAntiForgeryToken]
        public HttpResponseMessage GetUserMappingSettings()
        {
            try
            {
                var userMappings = UserMappingsRepository.Instance.GetUserMappings(GetCalculatedPortalId())
                    .Select((mapping, index) => new {
                        mapping.DnnPropertyName,
                        mapping.AadClaimName
                    }
                            );

                return Request.CreateResponse(HttpStatusCode.OK, userMappings);
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        [HttpGet]
        [ValidateAntiForgeryToken]
        public HttpResponseMessage GetAvailableRoles()
        {
            try
            {
                var availableRoles = RoleController.Instance.GetRoles(PortalId);
                var result = new List<string>();
                foreach (var availableRole in availableRoles.Where(r => !r.Settings.ContainsKey("IdentitySource") || (r.Settings.ContainsKey("IdentitySource") && r.Settings["IdentitySource"] != "Azure")))
                {
                    result.Add(availableRole.RoleName);
                }

                result.Sort();

                return Request.CreateResponse(HttpStatusCode.OK, result);
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        public class UpdateUserMappingInput
        {
            public string DnnPropertyName;
            public string AadClaimName;
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public HttpResponseMessage UpdateUserMapping(UpdateUserMappingInput input)
        {
            try
            {
                UserMappingsRepository.Instance.UpdateUserMapping(input.DnnPropertyName, input.AadClaimName, GetCalculatedPortalId());

                return Request.CreateResponse(HttpStatusCode.OK, new { Success = true });
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        public class UpdateRoleMappingInput
        {
            public class RoleMappingDetail
            {
                public string DnnRoleName;
                public string AadRoleName;
            }
            public string originalDnnRoleName;
            public RoleMappingDetail mappingDetail;
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public HttpResponseMessage UpdateRoleMapping(UpdateRoleMappingInput input)
        {
            try
            {
                if (string.IsNullOrEmpty(input.originalDnnRoleName))
                {
                    // It doesn't exist, let's create it
                    RoleMappingsRepository.Instance.InsertRoleMapping(input.mappingDetail.DnnRoleName, input.mappingDetail.AadRoleName, GetCalculatedPortalId());
                }
                else
                {
                    var roleMapping = RoleMappingsRepository.Instance.GetRoleMapping(input.originalDnnRoleName, GetCalculatedPortalId());
                    if (roleMapping != null)
                    {
                        RoleMappingsRepository.Instance.UpdateRoleMapping(roleMapping.DnnRoleName, input.mappingDetail.AadRoleName, GetCalculatedPortalId());
                    }
                    else
                    {
                        throw new ArgumentException($"Role mapping not found: {input.originalDnnRoleName}");
                    }
                }

                return Request.CreateResponse(HttpStatusCode.OK, new { Success = true });
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        public class DeleteRoleMappingInput
        {
            public string dnnRoleName;
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public HttpResponseMessage DeleteRoleMapping(DeleteRoleMappingInput input)
        {
            try
            {
                RoleMappingsRepository.Instance.DeleteRoleMapping(input.dnnRoleName, GetCalculatedPortalId());

                return Request.CreateResponse(HttpStatusCode.OK, new { Success = true });
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        public class UpdateProfileMappingInput
        {
            public class ProfileMappingDetail
            {
                public string DnnProfilePropertyName;
                public string AadClaimName;
            }
            public string originalDnnPropertyName;
            public ProfileMappingDetail profileMappingDetail;
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public HttpResponseMessage UpdateProfileMapping(UpdateProfileMappingInput input)
        {
            try
            {
                if (string.IsNullOrEmpty(input.originalDnnPropertyName))
                {
                    // It doesn't exist, let's create it
                    ProfileMappingsRepository.Instance.InsertProfileMapping(input.profileMappingDetail.DnnProfilePropertyName, input.profileMappingDetail.AadClaimName, GetCalculatedPortalId());
                }
                else
                {
                    var profileMapping = ProfileMappingsRepository.Instance.GetProfileMapping(input.originalDnnPropertyName, GetCalculatedPortalId());
                    if (profileMapping != null)
                    {
                        ProfileMappingsRepository.Instance.UpdateProfileMapping(profileMapping.DnnProfilePropertyName, input.profileMappingDetail.AadClaimName, GetCalculatedPortalId());
                    }
                    else
                    {
                        throw new ArgumentException($"Profile mapping not found: {input.originalDnnPropertyName}");
                    }
                }

                return Request.CreateResponse(HttpStatusCode.OK, new { Success = true });
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        public class DeleteProfileMappingInput
        {
            public string dnnProfilePropertyName;
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public HttpResponseMessage DeleteProfileMapping(DeleteProfileMappingInput input)
        {
            try
            {
                ProfileMappingsRepository.Instance.DeleteProfileMapping(input.dnnProfilePropertyName, GetCalculatedPortalId());

                return Request.CreateResponse(HttpStatusCode.OK, new { Success = true });
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        [HttpGet]
        [ValidateAntiForgeryToken]
        public HttpResponseMessage GetProfileProperties()
        {
            try
            {
                var profileProperties = ProfileController.GetPropertyDefinitionsByPortal(0, false, false).Cast<ProfilePropertyDefinition>().Select(v => new
                {
                    v.PropertyName
                });

                var result = new List<string>();
                foreach (var item in profileProperties)
                {
                    result.Add(item.PropertyName);
                }

                result.Sort();

                return Request.CreateResponse(HttpStatusCode.OK, result);
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        // POST: api/RedisCaching/UpdateGeneralSettings
        /// <summary>
        /// Updates the general settings
        /// </summary>
        /// <param name="settings"></param>
        /// <returns></returns>
        [HttpPost]
        [ValidateAntiForgeryToken]
        public HttpResponseMessage UpdateAdvancedSettings(AzureADProviderSettings settings)
        {
            try
            {
                if (!UserInfo.IsSuperUser)
                {
                    var config = new AzureConfig(AzureConfig.ServiceName, PortalId);
                    if (config.UseGlobalSettings || config.UseGlobalSettings != settings.UseGlobalSettings)
                        return Request.CreateResponse(HttpStatusCode.Forbidden, "Only super users can change this setting");
                }
                AzureADProviderSettings.SaveAdvancedSettings(AzureConfig.ServiceName, PortalId, settings);
                return Request.CreateResponse(HttpStatusCode.OK, new { Success = true });
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

    }
}
