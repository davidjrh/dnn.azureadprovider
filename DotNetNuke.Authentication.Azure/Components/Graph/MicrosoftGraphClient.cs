using DotNetNuke.Authentication.Azure.Components.Graph.Models;
using Microsoft.Graph;
using Microsoft.Identity.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

using Microsoft.IdentityModel.Clients.ActiveDirectory;
using ClientCredential = Microsoft.IdentityModel.Clients.ActiveDirectory.ClientCredential;
using Azure.Identity;
using Newtonsoft.Json;
using User = Microsoft.Graph.User;
using Group = Microsoft.Graph.Group;
using DirectoryObject = Microsoft.Graph.DirectoryObject;

namespace DotNetNuke.Authentication.Azure.Components.Graph
{
    class MicrosoftGraphClient
    {

        #region Properties

        private string[] Scopes = new[] { "https://graph.microsoft.com/.default" };
        private string Tenant { get; set; }
        private string ClientId { get; set; }
        private string ClientSecret { get; set; }

        private DateTime TokenExpires_On { get; set; }

        private TokenCredentialOptions options = new TokenCredentialOptions
        {
            AuthorityHost = AzureAuthorityHosts.AzurePublicCloud
        };

        private GraphServiceClient GraphClient { get; set; }

        #endregion

        public MicrosoftGraphClient()
        {

        }

        #region Constructors
        public MicrosoftGraphClient(string clientId, string clientSecret, string tenant)
        {
            // The client_id, client_secret, and tenant are pulled in from the App.config file
            ClientId = clientId;
            ClientSecret = clientSecret;
            Tenant = tenant;

            GraphClient = GetGraphServiceClientAsync().Result;
        }

        #endregion


        private async Task<GraphServiceClient> GetGraphServiceClientAsync()
        {
            GraphServiceClient graphServiceClient;

            if (TokenExpires_On > DateTime.Now.AddMinutes(59))
            {
                var authorizationUri = new Uri("https://login.microsoftonline.com/" + Tenant);

                IConfidentialClientApplication app;
                app = ConfidentialClientApplicationBuilder.Create(ClientId)
                                                          .WithClientSecret(ClientSecret)
                                                          .WithAuthority(authorizationUri)
                                                          .Build();

                var result = await app.AcquireTokenForClient(Scopes)
                      .ExecuteAsync();

                TokenExpires_On = DateTime.Now.AddMinutes(59);

                graphServiceClient = new GraphServiceClient(new DelegateAuthenticationProvider(async (request) => {
                    request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", result.AccessToken);
                    await Task.FromResult<object>(null);
                }));

                GraphClient = graphServiceClient;
            }
            else
            {
                graphServiceClient = GraphClient;
            }

            return graphServiceClient;

        }

        public async Task<User> GetUserAsync(string objectId)
        {
            // Refresh token
            GraphClient = GetGraphServiceClientAsync().Result;

            return await GraphClient.Users[objectId].Request().GetAsync();
        }

        public async Task<IGraphServiceUsersCollectionPage> GetAllUsersAsync(string query)
        {
            // Refresh token
            GraphClient = GetGraphServiceClientAsync().Result;

            var result = await GraphClient.Users.Request().Filter(query).GetAsync();

            return result;
        }

        public async Task DeleteUserAsync(string objectId)
        {
            // Refresh token
            GraphClient = GetGraphServiceClientAsync().Result;

            await GraphClient.Users[objectId].Request().DeleteAsync();
        }

        public async Task<User> AddUserAsync(NewUser newUser)
        {
            // Refresh token
            GraphClient = GetGraphServiceClientAsync().Result;

            var body = JsonConvert.DeserializeObject<Microsoft.Graph.User>(JsonConvert.SerializeObject(newUser));
            return await GraphClient.Users.Request().AddAsync(body);
        }

        public async Task UpdateUserAsync(User user)
        {
            // Refresh token
            GraphClient = GetGraphServiceClientAsync().Result;

            var body = JsonConvert.SerializeObject(user);
            _ = await GraphClient.Users.Request().GetAsync();
        }

        public async Task<IGraphServiceGroupsCollectionPage> GetAllGroupsAsync(string query)
        {
            // Refresh token
            GraphClient = GetGraphServiceClientAsync().Result;

            var result = await GraphClient.Groups.Request().GetAsync();

            return result;
        }

        public async Task<IUserMemberOfCollectionWithReferencesPage> GetUserGroupsAsync(string userId, string query = "")
        {
            // Refresh token
            GraphClient = GetGraphServiceClientAsync().Result;

            return await GraphClient.Users[userId].MemberOf.Request().GetAsync();
        }

        public async Task<IGroupMembersCollectionWithReferencesPage> GetGroupMembersAsync(string groupId)
        {
            // Refresh token
            GraphClient = GetGraphServiceClientAsync().Result;

            return await GraphClient.Groups[groupId].Members.Request().GetAsync();

        }

        public async Task<DirectoryObject> GetAADObjectReferenceAsync(string objectId)
        {
            // Refresh token
            GraphClient = GetGraphServiceClientAsync().Result;

            return await GraphClient.DirectoryObjects[objectId].Request().GetAsync();
        }

        public async Task AddGroupMemberAsync(string groupId, string userId)
        {
            // Refresh token
            GraphClient = GetGraphServiceClientAsync().Result;

            var directoryObject = new DirectoryObject
            {
                Id = userId
            };

            await GraphClient.Groups[groupId].Members.References.Request().AddAsync(directoryObject);
        }

        public async Task RemoveGroupMemberAsync(string groupId, string userId)
        {
            // Refresh token
            GraphClient = GetGraphServiceClientAsync().Result;

            await GraphClient.Groups[groupId].Members[userId].Reference.Request().DeleteAsync();
        }

        public async Task<ProfilePhoto> GetUserProfilePictureMetadataAsync(string userId)
        {
            // Refresh token
            GraphClient = GetGraphServiceClientAsync().Result;

            return await GraphClient.Users[userId].Photo.Request().GetAsync();
        }

        public async Task<IGraphServiceApplicationsCollectionPage> GetApplicationsAsync(string query)
        {
            // Refresh token
            GraphClient = GetGraphServiceClientAsync().Result;

            return await GraphClient.Applications.Request().Filter(query).GetAsync();
        }

        public async Task<ExtensionProperty> RegisterExtensionAsync(string appObjectId, ExtensionProperty extension)
        {
            // Refresh token
            GraphClient = GetGraphServiceClientAsync().Result;

            return await GraphClient.Applications[appObjectId].ExtensionProperties.Request().AddAsync(extension);
        }

        public async Task UnregisterExtensionAsync(string appObjectId, string extensionObjectId)
        {
            // Refresh token
            GraphClient = GetGraphServiceClientAsync().Result;

            await GraphClient.Applications[appObjectId].ExtensionProperties[extensionObjectId].Request().DeleteAsync();

        }

        public async Task<IApplicationExtensionPropertiesCollectionPage> GetExtensionsAsync(string appObjectId)
        {
            // Refresh token
            GraphClient = GetGraphServiceClientAsync().Result;

            return await GraphClient.Applications[appObjectId].ExtensionProperties.Request().GetAsync();
        }

        public async Task<IGraphServiceApplicationsCollectionPage> GetB2CExtensionApplicationAsync()
        {
            // Refresh token
            GraphClient = GetGraphServiceClientAsync().Result;

            return await GraphClient.Applications.Request().Filter("startswith(displayName, 'b2c-extensions-app')").GetAsync();
        }



    }
}
