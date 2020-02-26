#region Copyright

// 
// Intelequia Software solutions - https://intelequia.com
// Copyright (c) 2020
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
using DotNetNuke.Authentication.Azure.Components;
using DotNetNuke.Instrumentation;
using DotNetNuke.Web.Api.Auth;
using System;
using System.Net.Http;
using System.Security.Principal;
using System.Threading;
#endregion

namespace DotNetNuke.Authentication.Azure.Auth
{
    /// <summary>
    /// This class implements Azure AD authentication using JWT scheme
    /// </summary>
    public class AadAuthMessageHandler : AuthMessageHandlerBase
    {
        #region constants, properties, etc.
        private static readonly ILog Logger = LoggerSource.Instance.GetLogger(typeof(AadAuthMessageHandler));
        private readonly IAadController _b2cController = AadController.Instance;
        public override string AuthScheme => _b2cController.SchemeType;
        public override bool BypassAntiForgeryToken => true;
        internal static bool IsEnabled { get; set; }
        #endregion

        #region constructor
        public AadAuthMessageHandler(bool includeByDefault, bool forceSsl)
            : base(includeByDefault, forceSsl)
        {
            // Once an instance is enabled and gets registered in
            // ServicesRoutingManager.RegisterAuthenticationHandlers()
            // this scheme gets marked as enabled.
            IsEnabled = true;
        }

        #endregion

        #region implementation

        public override HttpResponseMessage OnInboundRequest(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            if (NeedsAuthentication(request))
            {
                TryToAuthenticate(request);
            }
            return base.OnInboundRequest(request, cancellationToken);
        }

        private void TryToAuthenticate(HttpRequestMessage request)
        {
            try
            {
                var username = _b2cController.ValidateToken(request);
                if (!string.IsNullOrEmpty(username))
                {
                    if (Logger.IsDebugEnabled) Logger.Debug($"Authenticated user '{username}'");
                    SetCurrentPrincipal(new GenericPrincipal(new GenericIdentity(username, AuthScheme), null), request);
                }
            }
            catch (Exception ex)
            {
                Logger.Error("Unexpected error in authenticating the user. " + ex);
            }
        }

        #endregion
    }

}
