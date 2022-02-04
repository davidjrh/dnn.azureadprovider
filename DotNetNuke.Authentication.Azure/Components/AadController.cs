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

#region Usings
using DotNetNuke.Authentication.Azure.Auth;
using DotNetNuke.Authentication.Azure.Common;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Entities.Users;
using DotNetNuke.Framework;
using DotNetNuke.Instrumentation;
using DotNetNuke.Security.Membership;
using DotNetNuke.Services.Authentication;
using Microsoft.IdentityModel.Protocols;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Cryptography;
using System.Text;
using System.Web;
#endregion

namespace DotNetNuke.Authentication.Azure.Components
{
    internal class AadController : ServiceLocator<IAadController, AadController>, IAadController
    {
        #region constants, properties, etc.

        private static readonly ILog Logger = LoggerSource.Instance.GetLogger(typeof(AadController));
        private static Dictionary<int, OpenIdConnectConfiguration> _config = null;
        private static readonly Encoding TextEncoder = Encoding.UTF8;
        public const string AuthScheme = "Bearer";
        public string SchemeType => "JWT";

        internal static Dictionary<int, OpenIdConnectConfiguration> Config
        {
            get
            {
                if (_config == null)
                {
                    _config = new Dictionary<int, OpenIdConnectConfiguration>();
                }
                return _config;
            }
        }

        internal static OpenIdConnectConfiguration GetConfig(int portalId, AzureConfig azureConfig)
        {
            if (!Config.ContainsKey(portalId))
            {
                var tokenConfigurationUrl = $"https://login.microsoftonline.com/{azureConfig.TenantId}/.well-known/openid-configuration";
                var _configManager = new ConfigurationManager<OpenIdConnectConfiguration>(tokenConfigurationUrl, new OpenIdConnectConfigurationRetriever());
                var _config = _configManager.GetConfigurationAsync().Result;
                Config.Add(portalId, _config);
            }
            return Config[portalId]; 
        }

        #endregion

        #region constructors / instantiators

        protected override Func<IAadController> GetFactory()
        {
            return () => new AadController();
        }

        #endregion

        #region interface implementation

        /// <summary>
        /// Validates the received JWT against the databas eand returns username when successful.
        /// </summary>
        public string ValidateToken(HttpRequestMessage request)
        {
            if (!AadAuthMessageHandler.IsEnabled)
            {
                Logger.Debug(SchemeType + " is not registered/enabled in web.config file");
                return null;
            }

            var authorization = ValidateAuthHeader(request?.Headers.Authorization);
            return string.IsNullOrEmpty(authorization) ? null : ValidateAuthorizationValue(authorization);
        }

        /// <summary>
        /// Checks for Authorization header and validates it is Azure scheme. If successful, it returns the token string.
        /// </summary>
        /// <param name="authHdr">The request auhorization header.</param>
        /// <returns>The B2C passed in the request; otherwise, it returns null.</returns>
        private string ValidateAuthHeader(AuthenticationHeaderValue authHdr)
        {
            if (authHdr == null)
            {
                //if (Logger.IsDebugEnabled) Logger.Debug("Authorization header not present in the request"); // too verbose; shows in all web requests
                return null;
            }

            if (!string.Equals(authHdr.Scheme, AuthScheme, StringComparison.CurrentCultureIgnoreCase))
            {
                if (Logger.IsDebugEnabled) Logger.Debug("Authorization header scheme in the request is not equal to " + SchemeType);
                return null;
            }

            var authorization = authHdr.Parameter;
            if (string.IsNullOrEmpty(authorization))
            {
                if (Logger.IsDebugEnabled) Logger.Debug("Missing authorization header value in the request");
                return null;
            }

            return authorization;
        }

        private string ValidateAuthorizationValue(string authorization)
        {
            if (authorization.Contains("oauth_token="))
            {
                authorization = authorization.Split('&').FirstOrDefault(x => x.Contains("oauth_token=")).Substring("oauth_token=".Length);
            }
            var parts = authorization.Split('.');
            if (parts.Length < 3)
            {
                if (Logger.IsDebugEnabled) Logger.Debug("Token must have [header:claims:signature] parts at least");
                return null;
            }

            var decoded = DecodeBase64(parts[0]);
            if (decoded.IndexOf("\"" + SchemeType + "\"", StringComparison.InvariantCultureIgnoreCase) < 0)            
            {
                if (Logger.IsDebugEnabled) Logger.Debug($"This is not a {SchemeType} authentication scheme.");
                return null;
            }

            var header = JsonConvert.DeserializeObject<JwtHeader>(decoded);
            if (!IsValidSchemeType(header))
                return null;

            var jwt = GetAndValidateJwt(authorization, true);
            if (jwt == null)
                return null;

            var userInfo = TryGetUser(jwt);
            var userName = userInfo?.Username;

            return userName;
        }

        private UserInfo TryGetUser(JwtSecurityToken jwt)
        {
            try
            {
                var portalSettings = PortalController.Instance.GetCurrentPortalSettings();
                var azureConfig = new AzureConfig(AzureConfig.ServiceName, portalSettings.PortalId);
                if (portalSettings == null)
                {
                    if (Logger.IsDebugEnabled) Logger.Debug("Unable to retrieve portal settings");
                    return null;
                }
                if (!azureConfig.Enabled || !azureConfig.JwtAuthEnabled)
                {
                    if (Logger.IsDebugEnabled) Logger.Debug($"Azure AD JWT auth is not enabled for portal {portalSettings.PortalId}");
                    return null;
                }

                var userIdClaim = Utils.GetUserIdClaim(azureConfig.UseGlobalSettings ? -1 : portalSettings.PortalId);
                var userClaim = jwt.Claims.FirstOrDefault(x => x.Type == userIdClaim);
                if (userClaim == null)
                {
                    if (Logger.IsDebugEnabled) Logger.Debug($"Can't find '{userIdClaim}' claim on token");
                }

                var userInfo = GetOrCreateCachedUserInfo(jwt, portalSettings, userClaim);
                if (userInfo == null)
                {
                    if (Logger.IsDebugEnabled) Logger.Debug("Invalid user");
                    return null;
                }

                var status = UserController.ValidateUser(userInfo, portalSettings.PortalId, false);
                var valid =
                    status == UserValidStatus.VALID ||
                    status == UserValidStatus.UPDATEPROFILE ||
                    status == UserValidStatus.UPDATEPASSWORD;

                if (!valid && Logger.IsDebugEnabled)
                {
                    Logger.Debug("Inactive user status: " + status);
                    return null;
                }

                return userInfo;
            }
            catch (Exception ex)
            {
                Logger.Error("Error while login in: " + ex.Message);
            }
            return null;

        }

        private static UserInfo GetOrCreateCachedUserInfo(JwtSecurityToken jwt, PortalSettings portalSettings, System.Security.Claims.Claim userClaim)
        {
            var usernamePrefixEnabled = bool.Parse(AzureConfig.GetSetting(AzureConfig.ServiceName, "UsernamePrefixEnabled", portalSettings.PortalId, "true"));
            var usernameToFind = usernamePrefixEnabled ? $"{AzureConfig.ServiceName}-{userClaim.Value}" : userClaim.Value;
            var userInfo = UserController.GetUserByName(portalSettings.PortalId, usernameToFind);
            var tokenKey = ComputeSha256Hash(jwt.RawData);
            var cache = DotNetNuke.Services.Cache.CachingProvider.Instance();
            if (string.IsNullOrEmpty((string)cache.GetItem($"SyncAADToken|{tokenKey}")))
            {
                var azureClient = new AzureClient(portalSettings.PortalId, AuthMode.Login)
                {
                    JwtIdToken = jwt
                };
                azureClient.SetAuthTokenInternal(jwt.RawData);
                azureClient.SetAutoMatchExistingUsers(true);
                var userData = azureClient.GetCurrentUserInternal(jwt);
                if (userInfo == null)
                {
                    // If user doesn't exist, create the user
                    userInfo = userData.ToUserInfo(usernamePrefixEnabled);
                    userInfo.PortalID = portalSettings.PortalId;
                    userInfo.Membership.Password = UserController.GeneratePassword();
                    var result = UserController.CreateUser(ref userInfo);
                }

                azureClient.AuthenticateUser(userData, portalSettings, HttpContext.Current.Request["REMOTE_ADDR"], azureClient.AddCustomProperties, azureClient.OnUserAuthenticated);
                azureClient.UpdateUserProfile(jwt, false, false);
                cache.Insert($"SyncAADToken|{tokenKey}", "OK", null, jwt.ValidTo, TimeSpan.Zero);
            }

            return userInfo;
        }

        private static string ComputeSha256Hash(string rawData)
        {
            // Create a SHA256   
            using (var sha256Hash = SHA256.Create())
            {
                // ComputeHash - returns byte array  
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(rawData));

                // Convert byte array to a string   
                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }
                return builder.ToString();
            }
        }


        private bool IsValidSchemeType(JwtHeader header)
        {
            //if (!SchemeType.Equals(header["typ"] as string, StringComparison.OrdinalIgnoreCase))
            if (!"JWT".Equals(header["typ"] as string, StringComparison.OrdinalIgnoreCase))
            {
                if (Logger.IsDebugEnabled) Logger.Debug("Unsupported authentication scheme type " + header.Typ);
                return false;
            }

            return true;
        }

        private static string DecodeBase64(string b64Str)
        {
            // fix Base64 string padding
            var mod = b64Str.Length % 4;
            if (mod != 0) b64Str += new string('=', 4 - mod);
            return TextEncoder.GetString(Convert.FromBase64String(b64Str));
        }

        private static JwtSecurityToken GetAndValidateJwt(string rawToken, bool checkExpiry)
        {
            JwtSecurityToken jwt;
            try
            {
                jwt = new JwtSecurityToken(rawToken);
            }
            catch (Exception ex)
            {
                Logger.Error("Unable to construct JWT object from authorization value. " + ex.Message);
                return null;
            }

            if (checkExpiry)
            {
                var now = DateTime.UtcNow;
                if (now < jwt.ValidFrom.AddMinutes(-5) || now > jwt.ValidTo)
                {
                    if (Logger.IsDebugEnabled) Logger.Debug("Token is expired");
                    return null;
                }
            }

            var portalSettings = PortalController.Instance.GetCurrentPortalSettings();
            var azureConfig = new AzureConfig(AzureConfig.ServiceName, portalSettings.PortalId);
            if (portalSettings == null)
            {
                if (Logger.IsDebugEnabled) Logger.Debug("Unable to retrieve portal settings");
                return null;
            }
            if (!azureConfig.Enabled || !azureConfig.JwtAuthEnabled)
            {
                if (Logger.IsDebugEnabled) Logger.Debug($"Azure AD JWT auth is not enabled for portal {portalSettings.PortalId}");
                return null;
            }

            var _config = GetConfig(portalSettings.PortalId, azureConfig);
            var validAudiences = azureConfig.JwtAudiences.Split(',').Select(x => x.Trim()).Where(x => !string.IsNullOrEmpty(x)).ToArray();
            if (validAudiences.Length == 0)
            {
                validAudiences = new[] { azureConfig.APIKey };
            }
            
            try
            {
                // Validate token.
                var _tokenValidator = new JwtSecurityTokenHandler();
                var validationParameters = new TokenValidationParameters
                {
                    // App Id URI and AppId of this service application are both valid audiences.
                    ValidAudiences = validAudiences,
                    // Support Azure AD V1 and V2 endpoints.
                    ValidIssuers = new[] { _config.Issuer, $"{_config.Issuer}v2.0/" },
                    IssuerSigningKeys = _config.SigningKeys
                };

                var claimsPrincipal = _tokenValidator.ValidateToken(rawToken, validationParameters, out SecurityToken _);
            }
            catch (Exception ex)
            {
                if (Logger.IsDebugEnabled) Logger.Debug($"Error validating token: {ex}");
                return null;
            }

            return jwt;
        }

        #endregion
    }
}
