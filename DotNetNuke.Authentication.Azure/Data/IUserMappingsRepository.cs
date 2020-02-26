using DotNetNuke.Authentication.Azure.Components.Models;
using System.Linq;

namespace DotNetNuke.Authentication.Azure.Data
{
    public interface IUserMappingsRepository
    {
        IQueryable<UserMapping> GetUserMappings(int portalId);
        UserMapping GetUserMapping(string dnnPropertyName, int portalId);
        void UpdateUserMapping(string dnnPropertyName, string aadClaimName, int portalId);
        void InsertUserMapping(string dnnPropertyName, string aadClaimName, int portalId);
    }
}
