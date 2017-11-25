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
