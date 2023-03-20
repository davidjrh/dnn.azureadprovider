#region Copyright

// 
// Intelequia Software solutions - https://intelequia.com
// Copyright (c) 2019
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

using DotNetNuke.Authentication.Azure.Components;
using DotNetNuke.Authentication.Azure.Data;
using DotNetNuke.Common;
using DotNetNuke.Common.Utilities;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Entities.Tabs;
using System;
using System.Diagnostics;
using System.Linq;
using System.Web;


namespace DotNetNuke.Authentication.Azure.Common
{
    public class Utils
    {
        [DebuggerStepThrough]
        public static string GetAppSetting(string key, string defaultValue = "")
        {
            return System.Configuration.ConfigurationManager.AppSettings.AllKeys.Contains(key) ? System.Configuration.ConfigurationManager.AppSettings[key] : defaultValue;
        }

        /// <summary>
        /// Gets the login URL for the given portal from the current <paramref name="request"/>.
        /// </summary>
        /// <param name="portalSettings">The portal settings.</param>
        /// <param name="request">The request.</param>
        /// <returns>The URL for the login page</returns>
        /// <exception cref="ArgumentNullException">if <paramref name="portalSettings"/> or <paramref name="request"/> is null.</exception>
        public static string GetLoginUrl(PortalSettings portalSettings, HttpRequest request)
        {
            Requires.NotNull("portalSettings", portalSettings);
            Requires.NotNull("request", request);

            int tabId = portalSettings.ActiveTab.TabID;
            string controlKey = "Login";
            string returnUrl = request.RawUrl;
            if (returnUrl.IndexOf("?returnurl=", StringComparison.OrdinalIgnoreCase) > -1)
            {
                returnUrl = returnUrl.Substring(0, returnUrl.IndexOf("?returnurl=", StringComparison.OrdinalIgnoreCase));
            }

            returnUrl = HttpUtility.UrlEncode(returnUrl);

            if (!Null.IsNull(portalSettings.LoginTabId) && string.IsNullOrEmpty(request.QueryString["override"]))
            {
                // user defined tab
                controlKey = string.Empty;
                tabId = portalSettings.LoginTabId;
            }
            else if (!Null.IsNull(portalSettings.HomeTabId))
            {
                // portal tab
                tabId = portalSettings.HomeTabId;
            }

            // else current tab
            return Globals.NavigateURL(tabId, controlKey, new string[] { "returnUrl=" + returnUrl });
        }

        public static string GetLoginUrl(int portalId, string culture, HttpRequest request)
        {
            Requires.NotNull("request", request);

            var portalSettings = new PortalSettings(portalId);
            int tabId = portalSettings.ActiveTab.TabID;
            string controlKey = "Login";
            string returnUrl = request.RawUrl;
            if (returnUrl.IndexOf("?returnurl=", StringComparison.OrdinalIgnoreCase) > -1)
            {
                returnUrl = returnUrl.Substring(0, returnUrl.IndexOf("?returnurl=", StringComparison.OrdinalIgnoreCase));
            }

            returnUrl = HttpUtility.UrlEncode(returnUrl);

            if (!Null.IsNull(portalSettings.LoginTabId) && string.IsNullOrEmpty(request.QueryString["override"]))
            {
                // user defined tab
                controlKey = string.Empty;
                tabId = portalSettings.LoginTabId;
            }
            else if (!Null.IsNull(portalSettings.HomeTabId))
            {
                // portal tab
                tabId = portalSettings.HomeTabId;
            }

            // else current tab

            var portalAliases = PortalAliasController.Instance.GetPortalAliasesByPortalId(portalId).Where(x => x.IsPrimary);
            var portalAlias = portalAliases.FirstOrDefault();
            if (!string.IsNullOrEmpty(culture) && portalAliases.Any(x => x.CultureCode == culture))
            {
                portalAlias = portalAliases.FirstOrDefault(x => x.CultureCode == culture);
            }
            portalSettings.PortalAlias = portalAlias;
            var uriBuilder = new UriBuilder(request.Url.Scheme, portalAlias.HTTPAlias);
            if (!request.Url.IsDefaultPort)
            {
                uriBuilder.Port = request.Url.Port;
            }

            var tab = TabController.Instance.GetTab(tabId, portalSettings.PortalId);
            uriBuilder.Path = tab.TabPath.Replace("//", "/");
            var query = $"tabId={tabId}";
            if (!string.IsNullOrEmpty(controlKey))
            {
                query += $"&ctl={controlKey}";
            }
            if (!string.IsNullOrEmpty(culture))
            {
                query += $"&language={culture}";
            }
            if (!string.IsNullOrEmpty(returnUrl))
            {
                query += $"&returnUrl={returnUrl}";
            }
            if (!string.IsNullOrEmpty(request.Url.Query))
            {
                query += $"&{request.Url.Query.Substring(1)}";
            }
            uriBuilder.Query = query;
            return uriBuilder.ToString();
        }

        public static string GetUserIdClaim(int portalId)
        {
            var usernameMapping = UserMappingsRepository.Instance.GetUserMapping("Id", portalId);

            return (usernameMapping != null) ? usernameMapping.AadClaimName : "sub";
        }

        public static string GetFirstName(string displayName)
        {
            return displayName.Split(' ')
                .First();
        }

        public static string GetLastName(string displayName)
        {
            return displayName.Split(' ')
                .Skip(1)
                .Aggregate("", (current, next) => current + " " + next)
                .TrimStart(' ');
        }

        public static void ValidateAadParameters(AzureConfig settings)
        {
            ValidateAadParameters(-1, settings);
        }

        public static void ValidateAadParameters(int portalId, AzureConfig settings)
        {
            if (string.IsNullOrEmpty(settings.AADApplicationId) || string.IsNullOrEmpty(settings.AADApplicationKey) || string.IsNullOrEmpty(settings.AADTenantId))
            {
                throw new Exception("AAD tenant ID, application ID or application key are not valid" + (portalId >= 0 ? " on portal " + portalId : ""));
            }
        }

    }

}
