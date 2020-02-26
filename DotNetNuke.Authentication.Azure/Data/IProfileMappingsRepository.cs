using DotNetNuke.Authentication.Azure.Components.Models;
using System.Linq;

namespace DotNetNuke.Authentication.Azure.Data
{
    public interface IProfileMappingsRepository
    {
        IQueryable<ProfileMapping> GetProfileMappings(int portalId);
        ProfileMapping GetProfileMapping(string dnnProfilePropertyName, int portalId);
        void UpdateProfileMapping(string dnnProfilePropertyName, string aadClaimName, int portalId);
        void InsertProfileMapping(string dnnProfilePropertyName, string aadClaimName, int portalId);
        void DeleteProfileMapping(string dnnProfilePropertyName, int portalId);
    }
}
