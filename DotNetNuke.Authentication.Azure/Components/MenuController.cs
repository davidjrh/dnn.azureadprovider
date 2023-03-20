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

using System.Collections.Generic;
using Dnn.PersonaBar.Library.Controllers;
using Dnn.PersonaBar.Library.Model;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Entities.Users;

namespace DotNetNuke.Authentication.Azure.Components
{
    public class MenuController : IMenuItemController
    {
        public void UpdateParameters(MenuItem menuItem)
        {
        }

        public bool Visible(MenuItem menuItem)
        {
            var user = UserController.Instance.GetCurrentUserInfo();
            return user != null && user.IsSuperUser;
        }

        public IDictionary<string, object> GetSettings(MenuItem menuItem)
        {
            return PortalSettings.Current == null ? null : GetSettings(PortalSettings.Current.PortalId);
        }

        public IDictionary<string, object> GetSettings(int portalId)
        {
#if DEBUG
            var uiUrl = "http://localhost:8080/dist";
#else
            var uiUrl = "./Modules/Dnn.AzureAD";            
#endif
            var apiUrl = "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.AzureAD";
            var version = System.Reflection.Assembly.GetExecutingAssembly().GetName().Version.ToString();

            return new Dictionary<string, object>
            {
                {"uiUrl", uiUrl},
                {"apiUrl", apiUrl},
                {"libraryVersion",  version },
            };
        }

    }
}
