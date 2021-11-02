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

#region Usings

using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using System.Web.Script.Serialization;
using DotNetNuke.Authentication.Azure.Common;
using DotNetNuke.Authentication.Azure.Components.Graph;
using DotNetNuke.Authentication.Azure.Components.Models;
using DotNetNuke.Authentication.Azure.Data;
using DotNetNuke.Common;
using DotNetNuke.Common.Lists;
using DotNetNuke.Common.Utilities;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Entities.Profile;
using DotNetNuke.Entities.Users;
using DotNetNuke.Instrumentation;
using DotNetNuke.Security.Roles;
using DotNetNuke.Services.Authentication;
using DotNetNuke.Services.Authentication.OAuth;
using DotNetNuke.Services.FileSystem;
using Microsoft.Graph;
using static DotNetNuke.Services.Authentication.AuthenticationLoginBase;

#endregion

namespace DotNetNuke.Authentication.Azure.Components
{
    public class AzureClient : OAuthClientBase
    {
        public const string RoleSettingsAadPropertyName = "IdentitySource";
        public const string RoleSettingsAadPropertyValue = "Azure";
        public const string DefaultScopes = "email openid profile";

        private const string TokenEndpointPattern = "https://login.microsoftonline.com/{0}/oauth2/v2.0/token";
        private const string LogoutEndpointPattern =
            "https://login.microsoftonline.com/{0}/oauth2/logout?post_logout_redirect_uri={1}";
        private const string AuthorizationEndpointPattern = "https://login.microsoftonline.com/{0}/oauth2/v2.0/authorize";
        private const string GraphEndpointPattern = "https://graph.windows.net/{0}";

        private static readonly ILog Logger = LoggerSource.Instance.GetLogger(typeof(AzureClient));

        private MicrosoftGraphClient _graphClient;
        private MicrosoftGraphClient GraphClient
        {
            get
            {
                if (_graphClient == null)
                {
                    if (string.IsNullOrEmpty(Settings.AADApplicationId) || string.IsNullOrEmpty(Settings.AADApplicationKey))
                    {
                        throw new Exception("AAD application ID or key are not valid");
                    }

                    _graphClient = new MicrosoftGraphClient(Settings.AADApplicationId, Settings.AADApplicationKey, Settings.TenantId);
                }
                return _graphClient;
            }
        }

        private readonly AzureConfig Settings;

        private List<ProfileMapping> _customClaimsMappings;
        public List<ProfileMapping> CustomClaimsMappings
        {
            get
            {
                if (_customClaimsMappings == null)
                {
                    _customClaimsMappings = ProfileMappingsRepository.Instance.GetProfileMappings(GetCalculatedPortalId()).ToList();
                }
                return _customClaimsMappings;
            }
        }

        private List<RoleMapping> _customRoleMappings;
        public List<RoleMapping> CustomRoleMappings
        {
            get
            {
                if (_customRoleMappings == null)
                {
                    _customRoleMappings = RoleMappingsRepository.Instance.GetRoleMappings(GetCalculatedPortalId()).ToList();
                }
                return _customRoleMappings;
            }
        }

        private List<UserMapping> _customUserMappings;
        public List<UserMapping> CustomUserMappings
        {
            get
            {
                if (_customUserMappings == null)
                {
                    _customUserMappings = UserMappingsRepository.Instance.GetUserMappings(GetCalculatedPortalId()).ToList();
                }
                return _customUserMappings;
            }
        }

        private string _userIdClaim;
        private string UserIdClaim
        {
            get
            {
                if (_userIdClaim == null)
                {

                    var usernameMapping = UserMappingsRepository.Instance.GetUserMapping("Id", GetCalculatedPortalId());
                    _userIdClaim = (usernameMapping != null) ? usernameMapping.AadClaimName : "oid";
                }
                return _userIdClaim;
            }
        }

        private string _firstNameClaimName;
        private string FirstNameClaimName
        {
            get
            {
                if (_firstNameClaimName == null)
                {
                    var firstNameMapping = UserMappingsRepository.Instance.GetUserMapping("FirstName", GetCalculatedPortalId());
                    _firstNameClaimName = (firstNameMapping != null) ? firstNameMapping.AadClaimName : JwtRegisteredClaimNames.GivenName;
                }
                return _firstNameClaimName;
            }
        }

        private string _lastNameClaimName;
        private string LastNameClaimName
        {
            get
            {
                if (_lastNameClaimName == null)
                {
                    var lastNameMapping = UserMappingsRepository.Instance.GetUserMapping("LastName", GetCalculatedPortalId());
                    _lastNameClaimName = (lastNameMapping != null) ? lastNameMapping.AadClaimName : JwtRegisteredClaimNames.FamilyName;
                }
                return _lastNameClaimName;
            }
        }

        private string _displayNameClaimName;
        private string DisplayNameClaimName
        {
            get
            {
                if (_displayNameClaimName == null)
                {
                    var displayNameMapping = UserMappingsRepository.Instance.GetUserMapping("DisplayName", GetCalculatedPortalId());
                    _displayNameClaimName = (displayNameMapping != null) ? displayNameMapping.AadClaimName : "name";
                }
                return _displayNameClaimName;
            }
        }

        private string _emailClaimName;
        private string EmailClaimName
        {
            get
            {
                if (_emailClaimName == null)
                {
                    var emailMapping = UserMappingsRepository.Instance.GetUserMapping("Email", GetCalculatedPortalId());
                    _emailClaimName = (emailMapping != null) ? emailMapping.AadClaimName : "emails";
                }
                return _emailClaimName;
            }
        }

        private bool _prefixServiceToUserName;
        public override bool PrefixServiceToUserName
        {
            get
            {
                return _prefixServiceToUserName;
            }
        }

        private bool _prefixServiceToGroupName;
        public bool PrefixServiceToGroupName
        {
            get
            {
                return _prefixServiceToGroupName;
            }
        }



        #region Constructors

        internal JwtSecurityToken JwtIdToken { get; set; }
        public Uri LogoutEndpoint { get; }

        private bool _autoMatchExistingUsers = false;
        public override bool AutoMatchExistingUsers
        {
            get
            {
                return _autoMatchExistingUsers;
            }
        }

        public void SetAutoMatchExistingUsers(bool value)
        {
            _autoMatchExistingUsers = value;
        }

        private int GetCalculatedPortalId()
        {
            return Settings.UseGlobalSettings ? -1 : PortalSettings.Current.PortalId;
        }


        public string RedirectUrl { get; set; }


        public AzureClient(int portalId, AuthMode mode) 
            : base(portalId, mode, AzureConfig.ServiceName)
        {
            Settings = new AzureConfig(AzureConfig.ServiceName, portalId);

            TokenMethod = HttpMethod.POST;
    
            
            if (!string.IsNullOrEmpty(Settings.TenantId))
            {
                TokenEndpoint = new Uri(string.Format(Utils.GetAppSetting("AzureAD.TokenEndpointPattern", TokenEndpointPattern), Settings.TenantId));  
                LogoutEndpoint = new Uri(string.Format(Utils.GetAppSetting("AzureAD.LogoutEndpointPattern", LogoutEndpointPattern), Settings.TenantId, UrlEncode(HttpContext.Current.Request.Url.ToString())));
                AuthorizationEndpoint = new Uri(string.Format(Utils.GetAppSetting("AzureAD.AuthorizationEndpointPattern", AuthorizationEndpointPattern), Settings.TenantId));
                MeGraphEndpoint = new Uri(string.Format(Utils.GetAppSetting("AzureAD.GraphEndpointPattern", GraphEndpointPattern), Settings.TenantId));
            }

            if (string.IsNullOrEmpty(Settings.APIResource) && string.IsNullOrEmpty(Settings.Scopes))
            {
                Scope = DefaultScopes;
                APIResource = "";
            }
            else
            {
                Scope = string.Join(" ", Settings.Scopes
                    .Split(new string[] { " " }, StringSplitOptions.RemoveEmptyEntries)
                    .Select(x => $"{Settings.APIResource}{x.Trim()}"));
                APIResource = Settings.APIResource;
            }

            if (!string.IsNullOrEmpty(Settings.RedirectUri))
            {
                CallbackUri = new Uri(Settings.RedirectUri);
            }

            APIKey = Settings.APIKey;
            APISecret = Settings.APISecret;
            AuthTokenName = "AzureUserToken";
            OAuthVersion = "2.0";
            OAuthHeaderCode = "Basic";
            LoadTokenCookie(string.Empty);
            JwtIdToken = null;

            _prefixServiceToUserName = Settings.UsernamePrefixEnabled;
            _prefixServiceToGroupName = Settings.GroupNamePrefixEnabled;
        }

        #endregion

        public new bool IsCurrentService()
        {
            var state = HttpContext.Current.Request.Params["state"];
            var oState = new State(state);
            return oState.Service == Service;
        }

        protected override TimeSpan GetExpiry(string responseText)
        {
            var jsonSerializer = new JavaScriptSerializer();
            var tokenDictionary = jsonSerializer.DeserializeObject(responseText) as Dictionary<string, object>;

            return new TimeSpan(0, 0, Convert.ToInt32(tokenDictionary["expires_in"]));
        }

        protected override string GetToken(string responseText)
        {
            if (string.IsNullOrEmpty(responseText))
            {
                throw new Exception("There was an error processing the credentials. Contact your system administrator.");
            }
            var jsonSerializer = new JavaScriptSerializer();
            var tokenDictionary = jsonSerializer.DeserializeObject(responseText) as Dictionary<string, object>;
            var token = Convert.ToString(tokenDictionary["access_token"]);
            JwtIdToken = new JwtSecurityToken(Convert.ToString(tokenDictionary["access_token"]));
            return token;
        }

        public override TUserData GetCurrentUser<TUserData>()
        {
            LoadTokenCookie(String.Empty);
            return GetCurrentUserInternal() as TUserData;
        }

        internal void SetAuthTokenInternal(string token)
        {
            AuthToken = token;
        }

        internal AzureUserData GetCurrentUserInternal(JwtSecurityToken pToken = null)
        {
            if (pToken == null && (!IsCurrentUserAuthorized() || JwtIdToken == null))
            {
                return null;
            }
            var claims = JwtIdToken.Claims.ToArray();
            EnsureClaimExists(claims, FirstNameClaimName);
            EnsureClaimExists(claims, LastNameClaimName);
            EnsureClaimExists(claims, DisplayNameClaimName);
            EnsureClaimExists(claims, EmailClaimName);
            EnsureClaimExists(claims, UserIdClaim);
            EnsureClaimExists(claims, "oid");       // we need this claim to make calls to AAD Graph

            var user = new AzureUserData()
            {
                AzureFirstName = claims.FirstOrDefault(x => x.Type == FirstNameClaimName)?.Value,
                AzureLastName = claims.FirstOrDefault(x => x.Type == LastNameClaimName)?.Value,
                AzureDisplayName = claims.FirstOrDefault(x => x.Type == DisplayNameClaimName)?.Value,
                Email = claims.FirstOrDefault(x => x.Type == EmailClaimName)?.Value,
                Id = claims.FirstOrDefault(x => x.Type == UserIdClaim).Value
            };
            user.AzureDisplayName = $"{user.AzureFirstName} {user.AzureLastName}";
            return user;
        }

        private void EnsureClaimExists(System.Security.Claims.Claim[] claims, string claimName)
        {
            var claim = claims.FirstOrDefault(x => x.Type == claimName)?.Value;
            if (string.IsNullOrEmpty(claim))
            {
                var sclaims = claims.Select(x => x.Type).Aggregate("", (current, next) => current + ", " + next);
                throw new ApplicationException($"Claim '{claimName}' was not found on the token. Available claims are: {sclaims}");
            }
        }


        public void AddCustomProperties(NameValueCollection properties)
        {
            if (!Settings.ProfileSyncEnabled)
            {
                return;
            }

            var claims = JwtIdToken.Claims.ToArray();

            foreach (var claim in claims)
            {
                switch (claim.Type)
                {
                    case "emails":
                        if (properties["Email"] == null)
                            properties.Set("Email", claim.Value);
                        break;
                    case "city":
                        properties.Set("City", claim.Value);
                        break;
                    case "country":
                        properties.Set("Country", claim.Value);
                        break;
                    case "name":
                        properties.Set("DisplayName", claim.Value);
                        break;
                    case "given_name":
                        properties.Set("FirstName", claim.Value);
                        break;
                    case "family_name":
                        properties.Set("LastName", claim.Value);
                        break;
                    case "postalCode":
                        properties.Set("PostalCode", claim.Value);
                        break;
                    case "state":
                        properties.Set("Region", claim.Value);
                        break;
                    case "streetAddress":
                        properties.Set("Street", claim.Value);
                        break;
                    case "exp":
                    case "nbf":
                    case "ver":
                    case "iss":
                    case "sub":
                    case "aud":
                    case "iat":
                    case "auth_time":
                    case "oid":
                    case "tfp":
                    case "at_hash":
                        break;
                    default:
                        // If we're here, "claim" is not a AAD built-in claim
                        // So, we have to map this custom claim to a DNN profile property
                        var mapping = CustomClaimsMappings.FirstOrDefault(c => c.AadClaimName.ToLower() == claim.Type.ToLower());
                        if (mapping != null)
                        {
                            properties.Add(mapping.DnnProfilePropertyName, claim.Value);
                        }
                        break;
                }
            }
        }


        public void UpdateUserProfile(JwtSecurityToken pToken = null, bool updateProfilePicture = true, bool updateUserRoles = true)
        {
            if (pToken == null && (!IsCurrentUserAuthorized() || JwtIdToken == null))
            {
                return;
            }
            if (pToken != null)
            {
                JwtIdToken = pToken;
            }
            var user = GetCurrentUserInternal(pToken).ToUserInfo(Settings.UsernamePrefixEnabled);
            // Update user
            var userInfo = UserController.GetUserByName(PortalSettings.Current.PortalId, user.Username);

            userInfo.FirstName = user.FirstName;
            userInfo.LastName = user.LastName;
            userInfo.DisplayName = user.DisplayName;

            if (Settings.ProfileSyncEnabled)
            {
                var properties = new NameValueCollection();
                AddCustomProperties(properties);
                foreach (var prop in properties.AllKeys)
                {
                    if (userInfo.Profile.GetPropertyValue(prop) != properties[prop])
                    {
                        userInfo.Profile.SetProfileProperty(prop, properties[prop]);
                    }
                }
                if (updateProfilePicture)
                {
                    UpdateUserProfilePicture(JwtIdToken.Claims.First(c => c.Type == "oid").Value, userInfo);
                }
            }
            UserController.UpdateUser(PortalSettings.Current.PortalId, userInfo);

            // Update user roles
            if (updateUserRoles)
            {
                UpdateUserRoles(JwtIdToken.Claims.First(c => c.Type == "oid").Value, userInfo);
            }

        }

        public void Logout()
        {
            if (HttpContext.Current.Request.Cookies.AllKeys.Contains(AuthTokenName)
                && (!(HttpContext.Current.Request.Cookies[AuthTokenName].Expires < DateTime.UtcNow.AddDays(-1))
                    || HttpContext.Current.Request.Cookies[AuthTokenName].Expires == DateTime.MinValue))
            {
                RemoveToken();
                HttpContext.Current.Response.Redirect(LogoutEndpoint.ToString(), true);
            }
        }

        public override void AuthenticateUser(UserData user, PortalSettings settings, string IPAddress, Action<NameValueCollection> addCustomProperties, Action<UserAuthenticatedEventArgs> onAuthenticated)
        {
            var portalSettings = settings;
            if (IsCurrentUserAuthorized() && JwtIdToken != null)
            {
                // Check if portalId profile mapping exists
                var portalUserMapping = UserMappingsRepository.Instance.GetUserMapping("PortalId", GetCalculatedPortalId());
                if (!string.IsNullOrEmpty(portalUserMapping?.AadClaimName))
                {
                    var claimName = portalUserMapping?.AadClaimName;
                    // Get PortalId from claim
                    var portalIdClaim = JwtIdToken.Claims.FirstOrDefault(x => x.Type == claimName)?.Value;
                    if (string.IsNullOrEmpty(portalIdClaim))
                    {
                        throw new SecurityTokenException("The user has no portalId claim and portalId profile mapping is setup. The AAD user can't login to any portal until the portalId attribute has been setup for the user. Ensure that the PortalId claim has been setup and included on the policy being used.");
                    }
                    if (int.TryParse(portalIdClaim, out int portalId) && portalId != portalSettings.PortalId)
                    {
                        // Redirect to the user portal
                        var request = HttpContext.Current.Request;
                        if (!string.IsNullOrEmpty(request.Headers["Authorization"]) && request.Headers["Authorization"].StartsWith("Bearer"))
                        {
                            throw new SecurityTokenException($"The user portalId claim ({portalId}) is different from current portalId ({portalSettings.PortalId}). Portal redirection flow is not supported on native apps. Please call the API from the corresponding portal URL");
                        }
                        var state = new State(request["state"]);
                        HttpContext.Current.Response.Redirect(Utils.GetLoginUrl(portalId, state.Culture, request));
                        return;
                    }
                }
            }

            var userIdClaim = Utils.GetUserIdClaim(GetCalculatedPortalId());
            var userClaim = JwtIdToken.Claims.FirstOrDefault(x => x.Type == userIdClaim);
            if (userClaim == null)
            {
                if (Logger.IsDebugEnabled)
                {
                    Logger.Error($"Can't find '{userIdClaim}' claim on token");
                }
                throw new MissingFieldException($"Can't find '{userIdClaim}' claim on token, needed to identify the user");
            }

            var usernamePrefixEnabled = bool.Parse(AzureConfig.GetSetting(AzureConfig.ServiceName, "UsernamePrefixEnabled", portalSettings.PortalId, "true"));
            var usernameToFind = usernamePrefixEnabled ? $"azure-{userClaim.Value}" : userClaim.Value;
            var userInfo = UserController.GetUserByName(portalSettings.PortalId, usernameToFind);
            // If user doesn't exist on current portal, AuthenticateUser() will create it. 
            // Otherwise, AuthenticateUser will perform a Response.Redirect, so we have to sinchronize the roles before that, to avoid the ThreadAbortException caused by the Response.Redirect
            if (userInfo == null)
            {
                base.AuthenticateUser(user, portalSettings, IPAddress, addCustomProperties, onAuthenticated);
                if (IsCurrentUserAuthorized())
                {
                    userInfo = UserController.GetUserByName(portalSettings.PortalId, usernameToFind);
                    if (userInfo == null)
                    {
                        throw new SecurityTokenException($"The logged in user {usernameToFind} does not belong to PortalId {portalSettings.PortalId}");
                    }
                    UpdateUserAndRoles(userInfo);
                    MarkUserAsAad(userInfo);
                }
            }
            else
            {
                if (IsCurrentUserAuthorized())
                {
                    UpdateUserAndRoles(userInfo);
                }
                base.AuthenticateUser(user, portalSettings, IPAddress, addCustomProperties, onAuthenticated);
            }
        }

        private void MarkUserAsAad(UserInfo user)
        {
            var def = ProfileController.GetPropertyDefinitionByName(user.PortalID, "IdentitySource");
            if (def == null)
            {
                var dataTypes = (new ListController()).GetListEntryInfoDictionary("DataType");
                var definition = new ProfilePropertyDefinition(user.PortalID)
                {
                    DataType = dataTypes["DataType:Text"].EntryID,
                    DefaultValue = "Azure",
                    DefaultVisibility = UserVisibilityMode.AdminOnly,
                    PortalId = user.PortalID,
                    ModuleDefId = Null.NullInteger,
                    PropertyCategory = "Security",
                    PropertyName = "IdentitySource",
                    Required = false,
                    Visible = false,
                    ViewOrder = -1
                };
                ProfileController.AddPropertyDefinition(definition);
            }

            user.Profile.SetProfileProperty("IdentitySource", "Azure");
            Security.Profile.ProfileProvider.Instance().UpdateUserProfile(user);
        }

        private void UpdateUserAndRoles(UserInfo userInfo)
        {
            if (Settings.AutoAuthorize && !userInfo.Membership.Approved && IsCurrentUserAuthorized())
            {
                userInfo.Membership.Approved = true; // Delegate approval on Auth Provider
                UserController.UpdateUser(userInfo.PortalID, userInfo);
            }
            UpdateUserRoles(JwtIdToken.Claims.First(c => c.Type == "oid").Value, userInfo);
            UpdateUserProfilePicture(JwtIdToken.Claims.First(c => c.Type == "oid").Value, userInfo, true);
        }

        public override AuthorisationResult Authorize()
        {
            string errorReason = HttpContext.Current.Request.Params["error_reason"];
            bool userDenied = (errorReason != null);
            if (userDenied)
            {
                return AuthorisationResult.Denied;
            }

            if (!HaveVerificationCode())
            {
                var parameters = new List<QueryParameter>
                {
                    new QueryParameter("scope", Scope),
                    new QueryParameter("client_id", APIKey),
                    new QueryParameter("redirect_uri", HttpContext.Current.Server.UrlEncode(CallbackUri.ToString())),
                    new QueryParameter("state", HttpContext.Current.Server.UrlEncode(new State() {
                        PortalId = Settings.PortalID,
                        Culture = PortalSettings.Current.CultureCode,
                        RedirectUrl = HttpContext.Current.Request["returnurl"]
                    }.ToString())),
                    new QueryParameter("response_type", "code"),
                    new QueryParameter("response_mode", "query"),
                };


                HttpContext.Current.Response.Redirect(AuthorizationEndpoint + "?" + parameters.ToNormalizedString(), false);
                return AuthorisationResult.RequestingCode;
            }

            ExchangeCodeForToken();

            SaveTokenCookie(string.IsNullOrEmpty(AuthToken));
            
            if (!string.IsNullOrEmpty(AuthToken) && !string.IsNullOrEmpty(HttpContext.Current.Request["state"]))
            {
                var state = new State(HttpContext.Current.Request["state"]);
                if (!string.IsNullOrEmpty(state.RedirectUrl))
                {
                    this.RedirectUrl = state.RedirectUrl;
                }
            }

            return string.IsNullOrEmpty(AuthToken) ? AuthorisationResult.Denied : AuthorisationResult.Authorized;
        }

        private void SaveTokenCookie(bool expireCookie = false)
        {
            var authTokenCookie = HttpContext.Current.Response.Cookies[$"{Service}UserToken"];
            if (authTokenCookie == null)
            {
                authTokenCookie = new HttpCookie(AuthTokenName);
            }
            authTokenCookie.Path = (!string.IsNullOrEmpty(Globals.ApplicationPath) ? Globals.ApplicationPath : "/");
            if (expireCookie)
            {
                authTokenCookie.Value = null;
            }
            else
            {
                authTokenCookie.Values[OAuthTokenKey] = AuthToken;
            }
            authTokenCookie.Expires = expireCookie ? DateTime.Now.AddYears(-30) : DateTime.Now.Add(AuthTokenExpiry);
            HttpContext.Current.Response.SetCookie(authTokenCookie);
        }

        private List<string> GetDnnAadRoles()
        {
            // This is the list of DNN roles coming from B2C
            return RoleController.Instance.GetRoles(PortalSettings.Current.PortalId)
                .Where(r => r.Settings.ContainsKey(RoleSettingsAadPropertyName) && r.Settings[RoleSettingsAadPropertyName] == RoleSettingsAadPropertyValue)
                .Select((roleInfo) => roleInfo.RoleName)
                .ToList();
        }

        private int AddRole(string roleName, string roleDescription, bool isFromAad)
        {
            var roleId = RoleController.Instance.AddRole(new RoleInfo
            {
                RoleName = roleName,
                Description = roleDescription,
                PortalID = PortalSettings.Current.PortalId,
                Status = RoleStatus.Approved,
                RoleGroupID = -1,
                AutoAssignment = false,
                IsPublic = false
            });

            if (isFromAad)
            {
                var role = RoleController.Instance.GetRoleById(PortalSettings.Current.PortalId, roleId);
                role.Settings.Add(RoleSettingsAadPropertyName, RoleSettingsAadPropertyValue);
                RoleController.Instance.UpdateRoleSettings(role, true);
            }

            return roleId;
        }

        private void UpdateUserRoles(string aadUserId, UserInfo userInfo)
        {
            if (!Settings.RoleSyncEnabled)
            {
                return;
            }

            try
            {
                var syncOnlyMappedRoles = (CustomRoleMappings != null && CustomRoleMappings.Count > 0);

                var aadGroups = GraphClient.GetUserGroupsAsync(aadUserId).Result;


                if (aadGroups != null && aadGroups.CurrentPage != null && aadGroups.CurrentPage.Count > 0 /*aadGroups.Values != null*/)
                {
                    var groupPrefix = PrefixServiceToGroupName ? $"{Service}-" : "";

                    var groups = new List<Group>();

                    var filter = ConfigurationManager.AppSettings["AzureAD.GetUserGroups.Filter"];
                    if (!string.IsNullOrEmpty(filter))
                    {
                        var onlyGroups = filter.Split(';');
                        var g = new List<Group>();
                        foreach (var f in onlyGroups)
                        {
                            var r = aadGroups.Where(x => x.ODataType == "#microsoft.graph.group").ToList().Where(y => ((Group)y).DisplayName.StartsWith(f));
                            //var r = groups.Where(x => x.DisplayName.StartsWith(f));
                            /*if (r.Count() > 0)
                                g.AddRange(r);*/

                            if (r.Count() > 0)
                            {
                                foreach(var gr in r)
                                {
                                    g.Add((Group)gr);
                                }
                            }
                        }
                        groups = g;
                    }

                    if (syncOnlyMappedRoles)
                    {
                        groupPrefix = "";
                        var aadRoles = CustomRoleMappings.Select(rm => rm.AadRoleName);
                        groups.RemoveAll(x => !aadRoles.Contains(x.DisplayName));
                    }

                    var dnnAadRoles = GetDnnAadRoles();
                    // In DNN, remove user from roles where the user doesn't belong to in AAD (we'll take care only AAD roles)
                    foreach (var dnnUserRole in userInfo.Roles.Where(role => dnnAadRoles.Contains(role)))
                    {
                        var aadGroupName = dnnUserRole;
                        var roleName = dnnUserRole;
                        var mapping = CustomRoleMappings?.FirstOrDefault(x => x.DnnRoleName == dnnUserRole);
                        if (mapping != null)
                        {
                            aadGroupName = mapping.AadRoleName;
                            roleName = mapping.DnnRoleName;
                        }
                        if (groups.FirstOrDefault(aadGroup => $"{groupPrefix}{aadGroup.DisplayName}" == aadGroupName) == null)
                        {
                            var role = RoleController.Instance.GetRoleByName(PortalSettings.Current.PortalId, roleName);
                            RoleController.DeleteUserRole(userInfo, role, PortalSettings.Current, false);
                        }
                    }

                    foreach (var group in groups)
                    {
                        var roleToAssign = syncOnlyMappedRoles ? CustomRoleMappings.Find(r => r.AadRoleName == group.DisplayName).DnnRoleName : $"{groupPrefix}{group.DisplayName}";
                        var dnnRole = RoleController.Instance.GetRoleByName(PortalSettings.Current.PortalId, roleToAssign);

                        if (dnnRole == null)
                        {
                            // Create role
                            var roleId = AddRole(roleToAssign, group.Description, true);
                            dnnRole = RoleController.Instance.GetRoleById(PortalSettings.Current.PortalId, roleId);
                            // Add user to Role
                            RoleController.Instance.AddUserRole(PortalSettings.Current.PortalId,
                                                                userInfo.UserID,
                                                                roleId,
                                                                RoleStatus.Approved,
                                                                false,
                                                                group.CreatedDateTime.HasValue ? group.CreatedDateTime.Value.DateTime : Null.NullDate,
                                                                group.DeletedDateTime.HasValue ? group.DeletedDateTime.Value.DateTime : Null.NullDate);
                        }
                        else
                        {
                            // If user doesn't belong to that DNN role, let's add it
                            if (!userInfo.Roles.Contains(roleToAssign))
                            {
                                RoleController.Instance.AddUserRole(PortalSettings.Current.PortalId,
                                                                    userInfo.UserID,
                                                                    dnnRole.RoleID,
                                                                    RoleStatus.Approved,
                                                                    false,
                                                                    group.CreatedDateTime.HasValue ? group.CreatedDateTime.Value.DateTime : Null.NullDate,
                                                                    group.DeletedDateTime.HasValue ? group.DeletedDateTime.Value.DateTime : Null.NullDate);
                            }
                        }
                    }
                }
            }
            catch (Exception e)
            {
                Logger.Warn($"Error while synchronizing the user roles from user {aadUserId}", e);
            }
        }

        private void UpdateUserProfilePicture(string aadUserId, UserInfo userInfo, bool saveUserInfo = false)
        {
            /*
            if (!Settings.ProfileSyncEnabled)
            {
                return;
            }
            try
            {
                if (!string.IsNullOrEmpty(aadUserId) && userInfo != null)
                {
                    var profilePictureMetadata = GraphClient.GetUserProfilePictureMetadata(aadUserId);
                    if (profilePictureMetadata != null && !string.IsNullOrEmpty(profilePictureMetadata.ODataMediaContentType))
                    {
                        var pictureBytes = GraphClient.GetUserProfilePicture(aadUserId);
                        var userFolder = FolderManager.Instance.GetUserFolder(userInfo);
                        var stream = new MemoryStream(pictureBytes);
                        var profilePictureInfo = FileManager.Instance.AddFile(userFolder,
                            $"{aadUserId}.{GetExtensionFromMediaContentType(profilePictureMetadata.ODataMediaContentType)}",
                            stream, true);

                        userInfo.Profile.Photo = profilePictureInfo.FileId.ToString();
                    }
                    if (saveUserInfo)
                    {
                        UserController.UpdateUser(userInfo.PortalID, userInfo);
                    }
                }
            }
            catch (Exception e)
            {
                Logger.Warn($"Error while synchronizing user profile picture from user {aadUserId}", e);
            }

            */
        }

        private static string GetExtensionFromMediaContentType(string contentType)
        {
            switch (contentType)
            {
                case "image/png": return "png";
                case "image/gif": return "gif";
                case "image/bmp": return "bmp";
                case "image/jpg": return "jpg";
                default: return contentType.ToLowerInvariant().Replace("image/", "");
            }
        }

        private void ExchangeCodeForToken()
        {
            // Exchange code was already exchanged for token. Redeeming the exchange code twice on Azure AD B2C works but not on regular Azure AD
            if (string.IsNullOrEmpty(AuthToken))
            {
                var parameters = new List<QueryParameter>
                {
                    new QueryParameter("grant_type", "authorization_code"),
                    new QueryParameter("client_id", APIKey),
                    new QueryParameter("client_secret", HttpContext.Current.Server.UrlEncode(APISecret)),
                    new QueryParameter("scope", HttpContext.Current.Server.UrlEncode(Scope)),
                    new QueryParameter("code", VerificationCode),
                    new QueryParameter("redirect_uri", HttpContext.Current.Server.UrlEncode(CallbackUri.ToString()))
                };

                var responseText = ExecuteWebRequest(TokenMethod, new Uri(TokenEndpoint.AbsoluteUri), parameters.ToNormalizedString(), string.Empty);
                AuthToken = GetToken(responseText);
                AuthTokenExpiry = GetExpiry(responseText);
            }
            else
            {
                JwtIdToken = new JwtSecurityToken(AuthToken);
                AuthTokenExpiry = JwtIdToken.ValidTo.TimeOfDay;
            }
        }

        private string ExecuteWebRequest(HttpMethod method, Uri uri, string contentParameters, string authHeader)
        {
            WebRequest request;

            if (method == HttpMethod.POST)
            {
                byte[] byteArray = Encoding.UTF8.GetBytes(contentParameters);

                request = WebRequest.CreateDefault(uri);
                request.Method = "POST";
                request.ContentType = "application/x-www-form-urlencoded";
                request.ContentLength = byteArray.Length;


                if (!String.IsNullOrEmpty(contentParameters))
                {
                    Stream dataStream = request.GetRequestStream();
                    dataStream.Write(byteArray, 0, byteArray.Length);
                    dataStream.Close();
                }
            }
            else
            {
                request = WebRequest.CreateDefault(GenerateRequestUri(uri.ToString(), contentParameters));
            }

            //Add Headers
            if (!String.IsNullOrEmpty(authHeader))
            {
                request.Headers.Add(HttpRequestHeader.Authorization, authHeader);
            }

            try
            {
                using (WebResponse response = request.GetResponse())
                {
                    using (Stream responseStream = response.GetResponseStream())
                    {
                        if (responseStream != null)
                        {
                            using (var responseReader = new StreamReader(responseStream))
                            {
                                return responseReader.ReadToEnd();
                            }
                        }
                    }
                }
            }
            catch (WebException ex)
            {
                using (Stream responseStream = ex.Response.GetResponseStream())
                {
                    if (responseStream != null)
                    {
                        using (var responseReader = new StreamReader(responseStream))
                        {
                            Logger.ErrorFormat("WebResponse exception: {0}", responseReader.ReadToEnd());
                        }
                    }
                }
            }
            return null;
        }

        private Uri GenerateRequestUri(string url, string parameters)
        {
            if (string.IsNullOrEmpty(parameters))
            {
                return new Uri(url);
            }

            return new Uri(string.Format("{0}{1}{2}", url, url.Contains("?") ? "&" : "?", parameters));
        }

        public event UserAuthenticatedEventHandler UserAuthenticated;
        public void OnUserAuthenticated(UserAuthenticatedEventArgs ea)
        {
            if (UserAuthenticated != null)
            {
                UserAuthenticated(null, ea);
            }
        }

    }

    internal static class AuthExtensions
    {
        public static string ToAuthorizationString(this IList<QueryParameter> parameters)
        {
            var sb = new StringBuilder();
            sb.Append("OAuth ");

            for (int i = 0; i < parameters.Count; i++)
            {
                string format = "{0}=\"{1}\"";

                QueryParameter p = parameters[i];
                sb.AppendFormat(format, OAuthClientBase.UrlEncode(p.Name), OAuthClientBase.UrlEncode(p.Value));

                if (i < parameters.Count - 1)
                {
                    sb.Append(", ");
                }
            }

            return sb.ToString();
        }

        public static string ToNormalizedString(this IList<QueryParameter> parameters)
        {
            var sb = new StringBuilder();
            for (int i = 0; i < parameters.Count; i++)
            {
                QueryParameter p = parameters[i];
                sb.AppendFormat("{0}={1}", p.Name, p.Value);

                if (i < parameters.Count - 1)
                {
                    sb.Append("&");
                }
            }

            return sb.ToString();
        }
    }

}