#region Copyright

// 
// Intelequia Software solutions - https://intelequia.com
// Copyright (c) 2019
// by Intelequia Software Solutions
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
// documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
// the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and 
// to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all copies or substantial portions 
// of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
// TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
// THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
// CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
// DEALINGS IN THE SOFTWARE.

#endregion

using DotNetNuke.Entities.Modules;
using System;
using System.Linq;

namespace DotNetNuke.Authentication.Azure.Components
{
    public class FeatureController : IUpgradeable
    {
        public string UpgradeModule(string version)
        {
            try
            {
                var task = DotNetNuke.Services.Scheduling.SchedulingController.GetSchedule().FirstOrDefault(x => x.TypeFullName == "DotNetNuke.Authentication.Azure.ScheduledTasks.SyncSchedule, DotNetNuke.Authentication.Azure");
                if (task != null)
                {
                    DotNetNuke.Services.Scheduling.SchedulingController.UpdateSchedule(task.ScheduleID,
                        task.TypeFullName,
                        task.TimeLapse, task.TimeLapseMeasurement, task.RetryTimeLapse, task.RetryTimeLapseMeasurement,
                        task.RetainHistoryNum, task.AttachToEvent, task.CatchUpEnabled, true, task.ObjectDependencies,
                        "," + Environment.MachineName + ",", task.FriendlyName);
                }
                return "Success";
            }
            catch (Exception ex)
            {
                return "Failed: " + ex.Message;
            }
        }

    }
}
