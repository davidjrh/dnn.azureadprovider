using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace DotNetNuke.Authentication.Azure.Components.Graph.Models
{
    [JsonObject(MemberSerialization = MemberSerialization.OptIn)]
    public class NewUser: User
    {
        public NewUser()
        {
            Initialize();
        }

        public NewUser(User user)
        {
            //Get the list of properties available in base class
            var properties = user.GetType().GetProperties();

            properties.ToList().ForEach(property =>
            {
                //Check whether that property is present in derived class
                var isPresent = this.GetType().GetProperty(property.Name);
                if (isPresent != null)
                {
                    //If present get the value and map it
                    var value = user.GetType().GetProperty(property.Name).GetValue(user, null);
                    this.GetType().GetProperty(property.Name).SetValue(this, value, null);
                }
            });

            Initialize();
        }

        private void Initialize()
        {
            AccountEnabled = true;
            SignInNames = new List<SignInName>();
            CreationType = "LocalAccount";
            PasswordPolicies = "DisablePasswordExpiration";
            PasswordProfile = new PasswordProfile()
            {
                ForceChangePasswordNextLogin = false
            };
        }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "signInNames", Required = Required.Default)]
        public List<SignInName> SignInNames { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "creationType", Required = Required.Default)]
        public string CreationType { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "passwordProfile", Required = Required.Default)]
        public PasswordProfile PasswordProfile { get; set; }

    }

    [JsonObject(MemberSerialization = MemberSerialization.OptIn)]
    public class SignInName
    {
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "type", Required = Required.Default)]
        public string Type { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "value", Required = Required.Default)]
        public string Value { get; set; }
    }

    [JsonObject(MemberSerialization = MemberSerialization.OptIn)]
    public class PasswordProfile
    {
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "password", Required = Required.Default)]
        public string Password { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "forceChangePasswordNextLogin", Required = Required.Default)]
        public bool ForceChangePasswordNextLogin { get; set; }
    }

}
