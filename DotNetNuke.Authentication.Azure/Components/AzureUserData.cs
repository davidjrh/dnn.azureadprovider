﻿#region Copyright

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

#region Usings

using System.Runtime.Serialization;
using DotNetNuke.Entities.Users;
using DotNetNuke.Services.Authentication.OAuth;

#endregion

namespace DotNetNuke.Authentication.Azure.Components
{
    [DataContract]
    public class AzureUserData : UserData
    {
        #region Overrides

        public override string FirstName
        {
            get { return AzureFirstName; }
            set { }
        }

        public override string LastName
        {
            get { return AzureLastName; }
            set { }
        }

        public override string DisplayName
        {
            get { return AzureDisplayName; }
            set { }
        }

        #endregion

        [DataMember(Name = "given_name")]
        public string AzureFirstName { get; set; }

        [DataMember(Name = "family_name")]
        public string AzureLastName { get; set; }

        [DataMember(Name = "name")]
        public string AzureDisplayName { get; set; }

        public UserInfo ToUserInfo(bool usernamePrefixEnabled)
        {
            return new UserInfo()
            {
                DisplayName = this.DisplayName,
                FirstName = this.FirstName,
                LastName = this.LastName,
                Email = this.Email,
                Username = usernamePrefixEnabled ? $"Azure-{this.Id}" : this.Id
            };
        }


    }
}