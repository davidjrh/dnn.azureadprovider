using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;
using DotNetNuke.Entities.Controllers;

namespace DotNetNuke.Authentication.Azure.Services
{
    [DataContract]
    public class AzureADProviderSettings
    {
        [DataMember(Name = "apiKey")]
        public string ApiKey { get; set; }
        [DataMember(Name = "apiSecret")]
        public string ApiSecret { get; set; }
        [DataMember(Name = "appUri")]
        public string AppUri { get; set; }
        [DataMember(Name = "authorizationEndpoint")]
        public string AuthorizationEndpoint { get; set; }
        [DataMember(Name = "autoRedirect")]
        public bool AutoRedirect { get; set; }
        [DataMember(Name = "enabled")]
        public bool Enabled { get; set; }
        [DataMember(Name = "graphEndpoint")]
        public string GraphEndpoint { get; set; }
        [DataMember(Name = "tokenEndpoint")]
        public string TokenEndpoint { get; set; }

        internal void LoadSettings()
        {
            ApiKey = HostController.Instance.GetString("AzureAD.ApiKey");
            ApiSecret = HostController.Instance.GetString("AzureAD.ApiSecret");
            AuthorizationEndpoint = HostController.Instance.GetString("AzureAD.AuthorizationEndpoint");
            AutoRedirect = bool.Parse(HostController.Instance.GetString("AzureAD.AutoRedirect", "False"));
            Enabled = bool.Parse(HostController.Instance.GetString("AzureAD.Enabled", "False"));
            GraphEndpoint = HostController.Instance.GetString("AzureAD.GraphEndpoint");
            TokenEndpoint = HostController.Instance.GetString("AzureAD.TokenEndpoint");
            AppUri = HostController.Instance.GetString("AzureAD.AppUri");
        }

        internal void SaveSettings()
        {
            var settings = new Dictionary<string, string>
            {
                {"AzureAD.ApiKey", ApiKey },
                {"AzureAD.ApiSecret", ApiSecret },
                {"AzureAD.AuthorizationEndpoint", AuthorizationEndpoint },
                {"AzureAD.AutoRedirect", AutoRedirect.ToString() },
                {"AzureAD.Enabled", Enabled.ToString() },
                {"AzureAD.GraphEndpoint", GraphEndpoint },
                {"AzureAD.TokenEndpoint", TokenEndpoint },
                {"AzureAD.AppUri", AppUri}
            };

            HostController.Instance.Update(settings);
        }
    }
}
;