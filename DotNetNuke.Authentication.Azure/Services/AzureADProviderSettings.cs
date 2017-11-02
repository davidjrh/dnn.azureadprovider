using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;
using DotNetNuke.Entities.Controllers;

namespace DotNetNuke.Authentication.Azure.Services
{
    /*
    [DataContract]
    public class AzureADProviderSettings
    {
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
        public bool Enabled { get; set; }

        internal void LoadSettings()
        {
            ApiKey = HostController.Instance.GetString("AzureAD.ApiKey");
            ApiSecret = HostController.Instance.GetString("AzureAD.ApiSecret");
            TenantId = HostController.Instance.GetString("AzureAD.TenantId");
            AutoRedirect = bool.Parse(HostController.Instance.GetString("AzureAD.AutoRedirect", "False"));
            Enabled = bool.Parse(HostController.Instance.GetString("AzureAD.Enabled", "False"));
            AppUri = HostController.Instance.GetString("AzureAD.AppUri");
        }

        internal void SaveSettings()
        {
            var settings = new Dictionary<string, string>
            {
                {"AzureAD.ApiKey", ApiKey },
                {"AzureAD.ApiSecret", ApiSecret },
                {"AzureAD.TenantId", TenantId },
                {"AzureAD.AutoRedirect", AutoRedirect.ToString() },
                {"AzureAD.Enabled", Enabled.ToString() },
                {"AzureAD.AppUri", AppUri}
            };

            HostController.Instance.Update(settings);
        }
    }
    */
}