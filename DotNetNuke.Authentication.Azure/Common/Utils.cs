using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DotNetNuke.Authentication.Azure.Common
{
    public class Utils
    {
        [DebuggerStepThrough]
        public static string GetAppSetting(string key, string defaultValue = "")
        {
            return System.Configuration.ConfigurationManager.AppSettings.AllKeys.Contains(key) ? System.Configuration.ConfigurationManager.AppSettings[key] : defaultValue;
        }
    }

}
