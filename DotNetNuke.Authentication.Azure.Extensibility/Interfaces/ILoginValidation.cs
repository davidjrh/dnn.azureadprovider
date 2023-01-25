using System.Web;

namespace DotNetNuke.Authentication.Azure.Extensibility
{
    public interface ILoginValidation
    {
        void OnTokenReceived(string authToken, HttpContext context);
    }
}
