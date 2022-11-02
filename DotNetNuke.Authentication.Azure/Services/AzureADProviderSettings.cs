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

using System.Runtime.Serialization;
using DotNetNuke.Authentication.Azure.Components;

namespace DotNetNuke.Authentication.Azure.Services
{
    [DataContract]
    public class AzureADProviderSettings
    {
        [DataMember(Name = "tenantId")]
        public string TenantId { get; set; }
        [DataMember(Name = "apiKey")]
        public string ApiKey { get; set; }
        [DataMember(Name = "apiSecret")]
        public string ApiSecret { get; set; }
        [DataMember(Name = "redirectUri")]
        public string RedirectUri { get; set; }
        [DataMember(Name = "onErrorUri")]
        public string OnErrorUri { get; set; }
        [DataMember(Name = "autoRedirect")]
        public bool AutoRedirect { get; set; }
        [DataMember(Name = "enabled")]
        public bool Enabled { get; set; }
        [DataMember(Name = "useGlobalSettings")]
        public bool UseGlobalSettings { get; set; }
        [DataMember(Name = "aadAppClientId")]
        public string AadAppClientId { get; set; }
        [DataMember(Name = "aadAppSecret")]
        public string AadAppSecret { get; set; }
        [DataMember(Name = "jwtAudiences")]
        public string JwtAudiences { get; set; }
        [DataMember(Name = "roleSyncEnabled")]
        public bool RoleSyncEnabled { get; set; }
        [DataMember(Name = "profileSyncEnabled")]
        public bool ProfileSyncEnabled { get; set; }
        [DataMember(Name = "jwtAuthEnabled")]
        public bool JwtAuthEnabled { get; set; }
        [DataMember(Name = "apiResource")]
        public string ApiResource { get; set; }
        [DataMember(Name = "scopes")]
        public string Scopes { get; set; }
        [DataMember(Name = "usernamePrefixEnabled")]
        public bool UsernamePrefixEnabled { get; set; }
        [DataMember(Name = "groupNamePrefixEnabled")]
        public bool GroupNamePrefixEnabled { get; set; }
        [DataMember(Name = "autoAuthorize")]
        public bool AutoAuthorize { get; set; }
        [DataMember(Name = "authorizationCodePrompt")]
        public string AuthorizationCodePrompt { set; get; }
        [DataMember(Name = "domainHint")]
        public string DomainHint { get; set; }



        public static AzureADProviderSettings LoadSettings(string service, int portalId)
        {
            var config = new AzureConfig(service, portalId);
            return new AzureADProviderSettings
            {
                TenantId = config.TenantId,
                ApiKey = config.APIKey,
                ApiSecret = config.APISecret,
                RedirectUri = config.RedirectUri,
                OnErrorUri = config.OnErrorUri,
                AutoRedirect = config.AutoRedirect,
                AutoAuthorize = config.AutoAuthorize,
                AadAppClientId = config.AADApplicationId,
                AadAppSecret = config.AADApplicationKey,
                Enabled = config.Enabled,
                UseGlobalSettings = config.UseGlobalSettings,
                JwtAudiences = config.JwtAudiences,
                RoleSyncEnabled = config.RoleSyncEnabled,
                ProfileSyncEnabled = config.ProfileSyncEnabled,
                JwtAuthEnabled = config.JwtAuthEnabled,
                ApiResource = config.APIResource,
                Scopes = config.Scopes,
                UsernamePrefixEnabled = config.UsernamePrefixEnabled,
                GroupNamePrefixEnabled = config.GroupNamePrefixEnabled,
                AuthorizationCodePrompt = config.AuthorizationCodePrompt,
                DomainHint = config.DomainHint
            };
        }

        public static void SaveGeneralSettings(string service, int portalId, AzureADProviderSettings settings)
        {
            var config = new AzureConfig(service, portalId)
            {
                TenantId = settings.TenantId,
                APIKey = settings.ApiKey,
                APISecret = settings.ApiSecret,
                RedirectUri = settings.RedirectUri,
                OnErrorUri = settings.OnErrorUri,
                AutoRedirect = settings.AutoRedirect,
                AutoAuthorize = settings.AutoAuthorize,
                Enabled = settings.Enabled,
                UseGlobalSettings = settings.UseGlobalSettings
            };

            AzureConfig.UpdateConfig(config);
        }

        public static void SaveAdvancedSettings(string service, int portalId, AzureADProviderSettings settings)
        {
            var config = new AzureConfig(service, portalId)
            {
                AADApplicationId = settings.AadAppClientId,
                AADApplicationKey = settings.AadAppSecret,
                JwtAudiences = settings.JwtAudiences,
                RoleSyncEnabled = settings.RoleSyncEnabled,
                ProfileSyncEnabled = settings.ProfileSyncEnabled,
                JwtAuthEnabled = settings.JwtAuthEnabled,
                APIResource = settings.ApiResource + (!string.IsNullOrEmpty(settings.ApiResource.Trim()) && !settings.ApiResource.EndsWith("/") ? "/" : ""),
                Scopes = settings.Scopes,
                UsernamePrefixEnabled = settings.UsernamePrefixEnabled,
                GroupNamePrefixEnabled = settings.GroupNamePrefixEnabled,
                AuthorizationCodePrompt = settings.AuthorizationCodePrompt,
                DomainHint = settings.DomainHint
            };

            AzureConfig.UpdateConfig(config);
        }
    }
}
