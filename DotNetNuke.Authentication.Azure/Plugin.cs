using DotNetNuke.Authentication.Azure.Common;
using DotNetNuke.Authentication.Azure.Extensibility;
using System.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Web;


namespace Intelequia.Modules.CajaRural
{
    public class LoginValidation : ILoginValidation
    {
        public void OnTokenReceived(string authToken, HttpContext context)
        {
            var jwtSecurityToken = new JwtSecurityToken(authToken);
            var claim = jwtSecurityToken.Claims.FirstOrDefault(c => c.Type.ToLower() == "tid");

            var rsiTenantId = Utils.GetAppSetting("RSI.TenantId");
            //var portalIds = Utils.GetAppSetting("ValidTenantIdsByPortalId").Split(';').Where((_, index) => index % 2 == 0);
            var tenantIds = Utils.GetAppSetting("ValidTenantIdsByPortalId").Split(';').Where((_, index) => index % 2 == 1);

            bool allowAccess = false;

            if (claim.Value == rsiTenantId)
            {
                allowAccess = true;
            }
            else
            {
                for (var i = 0; i < tenantIds.Count(); i += 1)
                {
                    // FIXME: Should ONLY allow access if the CURRENT portal matches, right now it allows access as long as any portal matches
                    if (claim.Value == tenantIds.ElementAt(i)) // && (portalId == portalIds.ElementAt(i))
                    {
                        allowAccess = true;
                    }
                }
            }

            if (!allowAccess)
            {
                throw new SecurityTokenException($"The user is not authorized to log in to this environment");
            }
        }
    }
}