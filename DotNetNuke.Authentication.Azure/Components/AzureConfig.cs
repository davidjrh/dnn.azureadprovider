using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;
using DotNetNuke.Common.Utilities;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Services.Authentication.OAuth;
using DotNetNuke.UI.WebControls;

namespace DotNetNuke.Authentication.Azure.Components
{
    public class AzureConfig : OAuthConfigBase
    {
        private const string _cacheKey = "Authentication";

        protected internal AzureConfig(string service, int portalId) : base(service, portalId)
        {
            ApiKey = PortalController.GetPortalSetting(Service + "_ApiKey", portalId, "");
            ApiSecret = PortalController.GetPortalSetting(Service + "_ApiSecret", portalId, "");
            AppUri = PortalController.GetPortalSetting(Service + "_AppUri", portalId, "");
            TenantId = PortalController.GetPortalSetting(Service + "_TenantId", portalId, "");
            AutoRedirect = bool.Parse(PortalController.GetPortalSetting(Service + "_AutoRedirect", portalId, "false"));
            ProviderEnabled = bool.Parse(PortalController.GetPortalSetting(Service + "_ProviderEnabled", portalId, "false"));
        }

        [DataMember(Name = "apiKey")]
        public string ApiKey { get; set; }
        [DataMember(Name = "apiSecret")]
        public string ApiSecret { get; set; }
        [DataMember(Name = "appUri")]
        public string AppUri { get; set; }
        [DataMember(Name = "tenantId")]
        public string TenantId { get; set; }
        [DataMember(Name = "autoRedirect")]
        public bool AutoRedirect { get; set; }
        [DataMember(Name = "enabled")]
        public bool ProviderEnabled { get; set; }

        private static string GetCacheKey(string service, int portalId)
        {
            return _cacheKey + "." + service + "_" + portalId;
        }

        public new static AzureConfig GetConfig(string service, int portalId)
        {
            string key = GetCacheKey(service, portalId);
            var config = (AzureConfig)DataCache.GetCache(key);
            if (config == null)
            {
                config = new AzureConfig(service, portalId);
                DataCache.SetCache(key, config);
            }
            return config;
        }

        public static void UpdateConfig(AzureConfig config)
        {
            PortalController.UpdatePortalSetting(config.PortalID, config.Service + "_ApiKey", config.ApiKey);
            PortalController.UpdatePortalSetting(config.PortalID, config.Service + "_ApiSecret", config.ApiSecret);
            PortalController.UpdatePortalSetting(config.PortalID, config.Service + "_AppUri", config.AppUri);
            PortalController.UpdatePortalSetting(config.PortalID, config.Service + "_TenantId", config.TenantId);
            PortalController.UpdatePortalSetting(config.PortalID, config.Service + "_AutoRedirect", config.AutoRedirect.ToString());
            PortalController.UpdatePortalSetting(config.PortalID, config.Service + "_ProviderEnabled", config.ProviderEnabled.ToString());

            var oauthConfig = (OAuthConfigBase) config;
            oauthConfig.Enabled = config.ProviderEnabled;
            UpdateConfig((OAuthConfigBase)oauthConfig);
        }
    }
}