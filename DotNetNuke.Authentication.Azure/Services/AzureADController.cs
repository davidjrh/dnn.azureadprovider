using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using Dnn.PersonaBar.Library;
using Dnn.PersonaBar.Library.Attributes;
using DotNetNuke.Authentication.Azure.Components;
using DotNetNuke.Instrumentation;
using DotNetNuke.Web.Api;

namespace DotNetNuke.Authentication.Azure.Services
{
    [MenuPermission(Scope = ServiceScope.Host)]
    public class AzureADController : PersonaBarApiController
    {
        private static readonly ILog Logger = LoggerSource.Instance.GetLogger(typeof(AzureADController));

        /// GET: api/AzureAD/GetSettings
        /// <summary>
        /// Gets the settings
        /// </summary>
        /// <returns>settings</returns>
        [HttpGet]
        public HttpResponseMessage GetSettings()
        {
            try
            {
                /*
                var settings = new AzureADProviderSettings();
                settings.LoadSettings();
                return Request.CreateResponse(HttpStatusCode.OK, settings);
                */
                var settings = new AzureConfig("Azure", PortalId);
                return Request.CreateResponse(HttpStatusCode.OK, settings);
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        // POST: api/RedisCaching/UpdateSettings
        /// <summary>
        /// Updates the settings
        /// </summary>
        /// <param name="settings"></param>
        /// <returns></returns>
        [HttpPost]
        [ValidateAntiForgeryToken]
        public HttpResponseMessage UpdateSettings(AzureConfig settings)
        {
            try
            {
                //settings.SaveSettings();
                AzureConfig.UpdateConfig(settings);

                return Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }
    }
}
