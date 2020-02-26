using System;
using System.Web.Caching;
using DotNetNuke.ComponentModel.DataAnnotations;

namespace DotNetNuke.Authentication.Azure.Components.Models
{
    [TableName("AzureAD_UserMappings")]
    //setup the primary key for table
    [PrimaryKey("UserMappingId", AutoIncrement = true)]
    //configure caching using PetaPoco
    [Cacheable("UserMapping", CacheItemPriority.Default, 20)]
    public class UserMapping
    {
        public int UserMappingId { get; set; }

        public string DnnPropertyName { get; set; }
        public string AadClaimName { get; set; }
        public int PortalId { get; set; }
        public int CreatedByUserId { get; set; }
        public DateTime CreatedOnDate { get; set; }
        public int LastModifiedByUserId { get; set; }
        public DateTime LastModifiedOnDate { get; set; }

    }
}
