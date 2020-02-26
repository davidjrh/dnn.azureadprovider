using DotNetNuke.Authentication.Azure.Components.Models;
using DotNetNuke.Common;
using DotNetNuke.Data;
using DotNetNuke.Entities.Users;
using DotNetNuke.Framework;
using System;
using System.Linq;

namespace DotNetNuke.Authentication.Azure.Data
{
    public class UserMappingsRepository : ServiceLocator<IUserMappingsRepository, UserMappingsRepository>, IUserMappingsRepository
    {
        protected override Func<IUserMappingsRepository> GetFactory()
        {
            return () => new UserMappingsRepository();
        }

        public IQueryable<UserMapping> GetUserMappings(int portalId)
        {
            IQueryable<UserMapping> result = null;

            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<UserMapping>();
                result = rep.Find("WHERE PortalId = @0", portalId).AsQueryable();
            }

            return result;
        }

        public UserMapping GetUserMapping(string dnnPropertyName, int portalId)
        {
            Requires.NotNullOrEmpty("DnnPropertyName", dnnPropertyName);

            UserMapping result;
            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<UserMapping>();
                result = rep.Find("WHERE DnnPropertyName = @0 AND PortalId = @1", dnnPropertyName, portalId).FirstOrDefault();
            }
            return result;
        }

        public void UpdateUserMapping(string dnnPropertyName, string aadClaimName, int portalId)
        {
            Requires.NotNullOrEmpty("DnnPropertyName", dnnPropertyName);

            var userMapping = GetUserMapping(dnnPropertyName, portalId);
            if (userMapping == null)
            {
                throw new ArgumentException($"User mapping '{dnnPropertyName}' not found in portal {portalId}");
            }

            userMapping.AadClaimName = aadClaimName;
            userMapping.PortalId = portalId;
            userMapping.LastModifiedOnDate = DateTime.UtcNow;
            userMapping.LastModifiedByUserId = UserController.Instance.GetCurrentUserInfo().UserID;
            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<UserMapping>();
                rep.Update(userMapping);
            }
        }

        public void InsertUserMapping(string dnnPropertyName, string aadClaimName, int portalId)
        {
            Requires.NotNullOrEmpty("DnnPropertyName", dnnPropertyName);
            Requires.NotNullOrEmpty("AadClaimName", aadClaimName);

            var userMapping = new UserMapping
            {
                DnnPropertyName = dnnPropertyName,
                CreatedByUserId = UserController.Instance.GetCurrentUserInfo().UserID,
                CreatedOnDate = DateTime.UtcNow,
                AadClaimName = aadClaimName,
                PortalId = portalId,
                LastModifiedOnDate = DateTime.UtcNow,
                LastModifiedByUserId = UserController.Instance.GetCurrentUserInfo().UserID
            };
            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<UserMapping>();
                rep.Insert(userMapping);
            }

        }
    }
}
