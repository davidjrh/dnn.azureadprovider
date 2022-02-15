using DotNetNuke.Instrumentation;
using Microsoft.Graph;
using Microsoft.Identity.Client;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Net;
using System.Threading.Tasks;

namespace DotNetNuke.Authentication.Azure.Components.Graph
{
    public class GraphClient
    {
        private static string[] Scopes = new[] { "https://graph.microsoft.com/.default" };
        private const string UserMembersToRetrieve = "id,displayName,surname,givenName,mail,mailNickname,otherMails,signInNames,userIdentities,identities,issuer,userPrincipalName,country,city,userType,accountEnabled,telephoneNumber,additionalData";
        private static readonly ILog Logger = LoggerSource.Instance.GetLogger(typeof(GraphClient));

        private readonly IConfidentialClientApplication _app;

        // Required for Advanced Queries
        private readonly QueryOption OdataCount = new QueryOption("$count", "true");
        // Required for Advanced Queries
        private readonly HeaderOption EventualConsistency = new HeaderOption("ConsistencyLevel", "eventual");

        public GraphClient(string clientId, string clientSecret, string tenant)
        {
            _app = ConfidentialClientApplicationBuilder
                    .Create(clientId)
                    .WithClientSecret(clientSecret)
                    .WithAuthority(new Uri("https://login.microsoftonline.com/" + tenant))
                    .Build();
        }

        // Gets a Graph client configured with
        // the specified scopes
        private GraphServiceClient GetGraphClient()
        {
            return GraphServiceClientFactory.GetAuthenticatedGraphClient(async () =>
                {
                    var token = await GetTokenAsync(_app);
                    return token;
                }
            );
        }

        private async Task<string> GetTokenAsync(IConfidentialClientApplication app)
        {
            string[] ResourceIds = Scopes;
            try
            {                
                var result = app.AcquireTokenForClient(ResourceIds).ExecuteSync();
                await Task.CompletedTask;
                return result.AccessToken;
            }
            catch (MsalClientException ex)
            {
                Logger.Error(ex);
                throw;                
            }
        }

        private void AddAdvancedOptions(IBaseRequest request)
        {
            request.QueryOptions.Add(OdataCount);
            request.Headers.Add(EventualConsistency);
        }

        private string GetCustomUserExtensions()
        {
            return ConfigurationManager.AppSettings["AzureAD.CustomUserExtensions"];
            //return string.Join(',', _options.CustomUserAttributes.Split(',').Select(x => GetExtensionAttributeName(x)));
        }

        public User GetUser(string objectId)
        {
            var graphClient = GetGraphClient();
            return graphClient.Users[objectId]
                .Request()
                .Select($"{UserMembersToRetrieve},{GetCustomUserExtensions()}")
                .GetSync();
        }

        public IGraphServiceUsersCollectionPage GetAllUsers(string search = "")
        {
            string filter = ConfigurationManager.AppSettings["AzureAD.GetAllUsers.Filter"];
            if (!string.IsNullOrEmpty(search))
            {
                if (!string.IsNullOrEmpty(filter))
                {
                    filter += " and ";
                }
                filter += $"startswith(displayName, '{search}')";
            }
            var graphClient = GetGraphClient();
            var request = graphClient.Users.Request()
                .Select($"{UserMembersToRetrieve},{GetCustomUserExtensions()}")
                .Filter(filter)
                .OrderBy("displayName");
            AddAdvancedOptions(request);
            return request.GetSync();
        }

        public void DeleteUser(string objectId)
        {
            var graphClient = GetGraphClient();
            graphClient.Users[objectId].Request().DeleteSync();
        }

        public User AddUser(User newUser)
        {
            if (newUser.AdditionalData == null)
            {
                newUser.AdditionalData = new Dictionary<string, object>();
            }

            var graphClient = GetGraphClient();
            return graphClient.Users.Request()
                .AddSync(newUser);
        }

        public User UpdateUser(User user)
        {
            var graphClient = GetGraphClient();
            return graphClient.Users[user.Id].Request()
                .UpdateSync(user);
        }

        public IGraphServiceGroupsCollectionPage GetAllGroups(string search = "")
        {
            string filter = ConfigurationManager.AppSettings["AzureAD.GetAllGroups.Filter"];
            if (!string.IsNullOrEmpty(search))
            {
                if (!string.IsNullOrEmpty(filter))
                {
                    filter += " and ";
                }
                filter += $"startswith(displayName, '{search}')";
            }
            var graphClient = GetGraphClient();
            var request = graphClient.Groups.Request()
                .Filter(filter)
                .OrderBy("displayName");
            AddAdvancedOptions(request);
            return request.GetSync();
        }

        public IUserMemberOfCollectionWithReferencesPage GetUserGroups(string userId)
        {
            var graphClient = GetGraphClient();
            return graphClient
                .Users[userId]
                .MemberOf
                .Request()
                .GetSync();
        }

        public IGroupTransitiveMembersCollectionWithReferencesPage GetGroupMembers(string groupId)
        {
            var graphClient = GetGraphClient();

            return graphClient.Groups[groupId].TransitiveMembers.Request()
                .Select($"{UserMembersToRetrieve},,{GetCustomUserExtensions()}")
                .OrderBy("displayName")                
                .GetSync();
        }

        public void AddGroupMember(string groupId, string userId)
        {
            var user = GetUser(userId);
            AddGroupMember(groupId, user);
        }
        public void AddGroupMember(string groupId, User user)
        {
            var graphClient = GetGraphClient();
            graphClient.Groups[groupId].Members.References.Request().AddSync(user);
        }

        public void RemoveGroupMember(string groupId, string userId)
        {
            var graphClient = GetGraphClient();
            graphClient.Groups[groupId].Members[userId].Reference.Request().DeleteSync();
        }

        public ProfilePhoto GetUserProfilePictureMetadata(string userId)
        {
            try
            {
                var graphClient = GetGraphClient();
                return graphClient.Users[userId].Photo.Request().GetSync(); 
            }
            catch (Exception ex)
            {
                if (Logger.IsDebugEnabled)
                {
                    Logger.Debug(ex.Message, ex);
                }
                // When the user doesn't have profile picture, the request throws a WebException
                return null;
            }
        }

        public byte[] GetUserProfilePicture(string userId)
        {
            try
            {
                var graphClient = GetGraphClient();
                var stream = graphClient.Users[userId].Photo.Content.Request().GetSync(); 
                using (var memoryStream = new MemoryStream())
                {
                    stream.CopyTo(memoryStream);
                    return memoryStream.ToArray();
                }
            }
            catch (WebException ex)
            {
                if (Logger.IsDebugEnabled)
                {
                    Logger.Debug(ex.Message, ex);
                }
                // When the user doesn't have profile picture or the API permission
                // User.Read.All for Type Application has not been consent
                return null;
            }
        }
    }
}
