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
        [DataMember(Name = "autoRedirect")]
        public bool AutoRedirect { get; set; }
        [DataMember(Name = "enabled")]
        public bool Enabled { get; set; }

        public static AzureADProviderSettings LoadSettings(string service, int portalId)
        {
            var config = new AzureConfig(service, portalId);
            return new AzureADProviderSettings
            {
                TenantId = config.TenantId,
                ApiKey = config.APIKey,
                ApiSecret = config.APISecret,
                AutoRedirect = config.AutoRedirect,
                Enabled = config.Enabled
            };
        }

        public static void SaveSettings(string service, int portalId, AzureADProviderSettings settings)
        {
            var config = new AzureConfig(service, portalId)
            {
                TenantId = settings.TenantId,
                APIKey = settings.ApiKey,
                APISecret = settings.ApiSecret,
                AutoRedirect = settings.AutoRedirect,
                Enabled = settings.Enabled
            };

            AzureConfig.UpdateConfig(config);
        }
    }
}
