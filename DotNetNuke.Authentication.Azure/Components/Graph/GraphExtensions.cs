using Microsoft.Graph;
using Microsoft.Identity.Client;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace DotNetNuke.Authentication.Azure.Components.Graph
{
    // Added Sync extensions methods because the current Graph nuget package is 
    // getting frozen on async calls. Horrible workaround but can't get it working.
    // See https://stackoverflow.com/questions/55105321/microsoft-graph-getasync-hangs-indefinitely
    // See https://stackoverflow.com/questions/66109869/getting-an-access-token-for-the-graph-api-works-in-a-console-app-but-just-hangs
    internal static class GraphExtensions
    {
        internal static IUserMemberOfCollectionWithReferencesPage GetSync(this IUserMemberOfCollectionWithReferencesRequest request)
        {
            using (var task = Task.Run(async () => await request.GetAsync()))
            {
                while (!task.IsCompleted)
                    Thread.Sleep(10);
                return task.Result;
            }
        }
        internal static User GetSync(this IUserRequest request)
        {
            using (var task = Task.Run(async () => await request.GetAsync()))
            {
                while (!task.IsCompleted)
                    Thread.Sleep(10);
                return task.Result;
            }
        }

        internal static ProfilePhoto GetSync(this IProfilePhotoRequest request)
        {
            using (var task = Task.Run(async () => await request.GetAsync()))
            {
                while (!task.IsCompleted)
                    Thread.Sleep(10);
                return task.Result;
            }
        }

        internal static Stream GetSync(this IProfilePhotoContentRequest request)
        {
            using (var task = Task.Run(async () => await request.GetAsync()))
            {
                while (!task.IsCompleted)
                    Thread.Sleep(10);
                return task.Result;
            }
        }



        internal static void DeleteSync(this IUserRequest request)
        {
            using (var task = Task.Run(async () => await request.DeleteAsync()))
            {
                while (!task.IsCompleted)
                    Thread.Sleep(10);
                return;
            }
        }

        internal static IGraphServiceUsersCollectionPage GetSync(this IGraphServiceUsersCollectionRequest request)
        {
            using (var task = Task.Run(async () => await request.GetAsync()))
            {
                while (!task.IsCompleted)
                    Thread.Sleep(10);
                return task.Result;
            }
        }

        internal static User AddSync(this IGraphServiceUsersCollectionRequest request, User user)
        {
            using (var task = Task.Run(async () => await request.AddAsync(user)))
            {
                while (!task.IsCompleted)
                    Thread.Sleep(10);
                return task.Result;
            }
        }

        internal static User UpdateSync(this IUserRequest request, User user)
        {
            using (var task = Task.Run(async () => await request.UpdateAsync(user)))
            {
                while (!task.IsCompleted)
                    Thread.Sleep(10);
                return task.Result;
            }
        }

        internal static IGraphServiceGroupsCollectionPage GetSync(this IGraphServiceGroupsCollectionRequest request)
        {
            using (var task = Task.Run(async () => await request.GetAsync()))
            {
                while (!task.IsCompleted)
                    Thread.Sleep(10);
                return task.Result;
            }
        }

        internal static IGroupTransitiveMembersCollectionWithReferencesPage GetSync(this IGroupTransitiveMembersCollectionWithReferencesRequest request)
        {
            using (var task = Task.Run(async () => await request.GetAsync()))
            {
                while (!task.IsCompleted)
                    Thread.Sleep(10);
                return task.Result;
            }
        }


        internal static Group AddSync(this IGraphServiceGroupsCollectionRequest request, Group group)
        {
            using (var task = Task.Run(async () => await request.AddAsync(group)))
            {
                while (!task.IsCompleted)
                    Thread.Sleep(10);
                return task.Result;
            }
        }

        

        internal static Group UpdateSync(this IGroupRequest request, Group group)
        {
            using (var task = Task.Run(async () => await request.UpdateAsync(group)))
            {
                while (!task.IsCompleted)
                    Thread.Sleep(10);
                return task.Result;
            }
        }


        internal static void AddSync(this IGroupMembersCollectionReferencesRequest request, User user)
        {
            using (var task = Task.Run(async () => await request.AddAsync(user)))
            {
                while (!task.IsCompleted)
                    Thread.Sleep(10);
                return;
            }
        }

        internal static void DeleteSync(this IDirectoryObjectReferenceRequest request)
        {
            using (var task = Task.Run(async () => await request.DeleteAsync()))
            {
                while (!task.IsCompleted)
                    Thread.Sleep(10);
                return;
            }
        }


        internal static AuthenticationResult ExecuteSync(this AcquireTokenForClientParameterBuilder request)
        {
            using (var task = Task.Run(async () => await request.ExecuteAsync()))
            {
                while (!task.IsCompleted)
                    Thread.Sleep(10);
                return task.Result;
            }
        }

        internal static T RunSynchronous<T>(this Task<T> t)
        {
            using (var task = Task.Run(async () => await t))
            {
                while (!task.IsCompleted)
                    Thread.Sleep(10);
                return task.Result;
            }
        }
    }
}
