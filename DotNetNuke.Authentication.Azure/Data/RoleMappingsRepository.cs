using DotNetNuke.Authentication.Azure.Components.Models;
using DotNetNuke.Common;
using DotNetNuke.Data;
using DotNetNuke.Entities.Users;
using DotNetNuke.Framework;
using System;
using System.Linq;

namespace DotNetNuke.Authentication.Azure.Data
{
    public class RoleMappingsRepository : ServiceLocator<IRoleMappingsRepository, RoleMappingsRepository>, IRoleMappingsRepository
    {
        protected override Func<IRoleMappingsRepository> GetFactory()
        {
            return () => new RoleMappingsRepository();
        }

        public IQueryable<RoleMapping> GetRoleMappings(int portalId)
        {
            IQueryable<RoleMapping> result = null;

            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<RoleMapping>();
                result = rep.Find("WHERE PortalId = @0", portalId).AsQueryable();
            }

            return result;
        }

        public RoleMapping GetRoleMapping(string dnnRoleName, int portalId)
        {
            Requires.NotNullOrEmpty("DnnRoleName", dnnRoleName);

            RoleMapping result;
            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<RoleMapping>();
                result = rep.Find("WHERE DnnRoleName = @0 AND PortalId = @1", dnnRoleName, portalId).FirstOrDefault();
            }
            return result;
        }

        public void UpdateRoleMapping(string dnnRoleName, string aadRoleName, int portalId)
        {
            Requires.NotNullOrEmpty("DnnRoleName", dnnRoleName);
            Requires.NotNullOrEmpty("AadRoleName", aadRoleName);

            var roleMapping = GetRoleMapping(dnnRoleName, portalId);
            if (roleMapping == null)
            {
                throw new ArgumentException($"Role mapping '{dnnRoleName}' not found in portal {portalId}");
            }

            roleMapping.AadRoleName = aadRoleName;
            roleMapping.PortalId = portalId;
            roleMapping.LastModifiedOnDate = DateTime.UtcNow;
            roleMapping.LastModifiedByUserId = UserController.Instance.GetCurrentUserInfo().UserID;
            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<RoleMapping>();
                rep.Update(roleMapping);
            }
        }

        public void InsertRoleMapping(string dnnRoleName, string aadRoleName, int portalId)
        {
            Requires.NotNullOrEmpty("DnnRoleName", dnnRoleName);
            Requires.NotNullOrEmpty("AadRoleName", aadRoleName);

            var roleMapping = new RoleMapping
            {
                DnnRoleName = dnnRoleName,
                CreatedByUserId = UserController.Instance.GetCurrentUserInfo().UserID,
                CreatedOnDate = DateTime.UtcNow,
                AadRoleName = aadRoleName,
                PortalId = portalId,
                LastModifiedOnDate = DateTime.UtcNow,
                LastModifiedByUserId = UserController.Instance.GetCurrentUserInfo().UserID
            };
            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<RoleMapping>();
                rep.Insert(roleMapping);
            }
        }

        public void DeleteRoleMapping(string dnnRoleName, int portalId)
        {
            Requires.NotNullOrEmpty("DnnRoleName", dnnRoleName);

            var roleMapping = GetRoleMapping(dnnRoleName, portalId);
            if (roleMapping != null)
            {
                using (IDataContext ctx = DataContext.Instance())
                {
                    var rep = ctx.GetRepository<RoleMapping>();
                    rep.Delete(roleMapping);
                }
            }
        }
    }
}
