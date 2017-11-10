using DotNetNuke.Common.Utilities;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Services.Authentication.OAuth;
using DotNetNuke.UI.WebControls;

namespace DotNetNuke.Authentication.Azure.Components
{
    public class AzureConfig : OAuthConfigBase
    {
        private const string _cacheKey = "Authentication";
        
        private AzureConfig() : base("", 0)
        { }
        protected internal AzureConfig(string service, int portalId) : base(service, portalId)
        {
            APIKey = PortalController.GetPortalSetting(Service + "_ApiKey", portalId, "");
            APISecret = PortalController.GetPortalSetting(Service + "_ApiSecret", portalId, "");
            TenantId = PortalController.GetPortalSetting(Service + "_TenantId", portalId, "");
            AutoRedirect = bool.Parse(PortalController.GetPortalSetting(Service + "_AutoRedirect", portalId, "false"));
            Enabled = bool.Parse(PortalController.GetPortalSetting(Service + "_Enabled", portalId, "false"));
        }

        [SortOrder(1)]
        public string TenantId { get; set; }
        [SortOrder(2)]
        public bool AutoRedirect { get; set; }

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
            PortalController.UpdatePortalSetting(config.PortalID, config.Service + "_ApiKey", config.APIKey);
            PortalController.UpdatePortalSetting(config.PortalID, config.Service + "_ApiSecret", config.APISecret);
            PortalController.UpdatePortalSetting(config.PortalID, config.Service + "_TenantId", config.TenantId);
            PortalController.UpdatePortalSetting(config.PortalID, config.Service + "_AutoRedirect", config.AutoRedirect.ToString());
            PortalController.UpdatePortalSetting(config.PortalID, config.Service + "_Enabled", config.Enabled.ToString());

            UpdateConfig((OAuthConfigBase)config);
        }
    }
}