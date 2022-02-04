using Microsoft.Graph;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace DotNetNuke.Authentication.Azure.Components.Graph
{
    internal static class GraphServiceClientFactory
    {
        public static GraphServiceClient GetAuthenticatedGraphClient(
            Func<Task<string>> acquireAccessToken)
        {
            return new GraphServiceClient(
                new CustomAuthenticationProvider(acquireAccessToken)
            );
        }
    }

    class CustomAuthenticationProvider : IAuthenticationProvider
    {
        private readonly Func<Task<string>> _acquireAccessToken;
        public CustomAuthenticationProvider(Func<Task<string>> acquireAccessToken)
        {
            _acquireAccessToken = acquireAccessToken;
        }

        public async Task AuthenticateRequestAsync(HttpRequestMessage requestMessage)
        {
            var accessToken = await _acquireAccessToken.Invoke();

            // Add the token in the Authorization header
            requestMessage.Headers.Authorization = new AuthenticationHeaderValue(
                "Bearer", accessToken
            );
        }
    }
}
