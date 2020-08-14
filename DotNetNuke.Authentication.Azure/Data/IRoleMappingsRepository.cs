using DotNetNuke.Authentication.Azure.Components.Models;
using System.Linq;

namespace DotNetNuke.Authentication.Azure.Data
{
    public interface IRoleMappingsRepository
    {
        IQueryable<RoleMapping> GetRoleMappings(int portalId);
        RoleMapping GetRoleMapping(string dnnRoleName, int portalId);
        void UpdateRoleMapping(string originalDnnRoleName, string dnnRoleName, string aadRoleName, int portalId);
        void InsertRoleMapping(string dnnRoleName, string aadRoleName, int portalId);
        void DeleteRoleMapping(string dnnRoleName, int portalId);
    }
}
