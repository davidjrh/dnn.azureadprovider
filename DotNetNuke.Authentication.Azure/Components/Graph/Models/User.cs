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

using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace DotNetNuke.Authentication.Azure.Components.Graph.Models
{
    [JsonObject(MemberSerialization = MemberSerialization.OptIn)]
    public class User : DirectoryObject
    {
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "accountEnabled", Required = Required.Default)]
        public bool? AccountEnabled { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "ageGroup", Required = Required.Default)]
        public string AgeGroup { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "businessPhones", Required = Required.Default)]
        public IEnumerable<string> BusinessPhones { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "city", Required = Required.Default)]
        public string City { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "companyName", Required = Required.Default)]
        public string CompanyName { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "country", Required = Required.Default)]
        public string Country { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "department", Required = Required.Default)]
        public string Department { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "displayName", Required = Required.Default)]
        public string DisplayName { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "employeeId", Required = Newtonsoft.Json.Required.Default)]
        public string EmployeeId { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "faxNumber", Required = Newtonsoft.Json.Required.Default)]
        public string FaxNumber { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "givenName", Required = Newtonsoft.Json.Required.Default)]
        public string GivenName { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "imAddresses", Required = Newtonsoft.Json.Required.Default)]
        public IEnumerable<string> ImAddresses { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "isResourceAccount", Required = Newtonsoft.Json.Required.Default)]
        public bool? IsResourceAccount { get; set; }

        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "jobTitle", Required = Newtonsoft.Json.Required.Default)]
        public string JobTitle { get; set; }

        /// <summary>
        /// Gets or sets legal age group classification.
        /// Used by enterprise applications to determine the legal age group of the user. This property is read-only and calculated based on ageGroup and consentProvidedForMinor properties. Allowed values: null, minorWithOutParentalConsent, minorWithParentalConsent, minorNoParentalConsentRequired, notAdult and adult. Refer to the legal age group property definitions for further information.)
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "legalAgeGroupClassification", Required = Newtonsoft.Json.Required.Default)]
        public string LegalAgeGroupClassification { get; set; }

        /// <summary>
        /// Gets or sets mail.
        /// The SMTP address for the user, for example, 'jeff@contoso.onmicrosoft.com'. Read-Only. Supports $filter.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "mail", Required = Newtonsoft.Json.Required.Default)]
        public string Mail { get; set; }

        /// <summary>
        /// Gets or sets mail nickname.
        /// The mail alias for the user. This property must be specified when a user is created. Supports $filter.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "mailNickname", Required = Newtonsoft.Json.Required.Default)]
        public string MailNickname { get; set; }

        /// <summary>
        /// Gets or sets mobile phone.
        /// The primary cellular telephone number for the user.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "mobilePhone", Required = Newtonsoft.Json.Required.Default)]
        public string MobilePhone { get; set; }

        /// <summary>
        /// Gets or sets on premises distinguished name.
        /// Contains the on-premises Active Directory distinguished name or DN. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "onPremisesDistinguishedName", Required = Newtonsoft.Json.Required.Default)]
        public string OnPremisesDistinguishedName { get; set; }

        /// <summary>
        /// Gets or sets on premises immutable id.
        /// This property is used to associate an on-premises Active Directory user account to their Azure AD user object. This property must be specified when creating a new user account in the Graph if you are using a federated domain for the user’s userPrincipalName (UPN) property. Important: The $ and _ characters cannot be used when specifying this property. Supports $filter.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "onPremisesImmutableId", Required = Newtonsoft.Json.Required.Default)]
        public string OnPremisesImmutableId { get; set; }

        /// <summary>
        /// Gets or sets on premises last sync date time.
        /// Indicates the last time at which the object was synced with the on-premises directory; for example: '2013-02-16T03:04:54Z'. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'. Read-only.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "onPremisesLastSyncDateTime", Required = Newtonsoft.Json.Required.Default)]
        public DateTimeOffset? OnPremisesLastSyncDateTime { get; set; }

        /// <summary>
        /// Gets or sets on premises security identifier.
        /// Contains the on-premises security identifier (SID) for the user that was synchronized from on-premises to the cloud. Read-only.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "onPremisesSecurityIdentifier", Required = Newtonsoft.Json.Required.Default)]
        public string OnPremisesSecurityIdentifier { get; set; }

        /// <summary>
        /// Gets or sets on premises sync enabled.
        /// true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "onPremisesSyncEnabled", Required = Newtonsoft.Json.Required.Default)]
        public bool? OnPremisesSyncEnabled { get; set; }

        /// <summary>
        /// Gets or sets on premises domain name.
        /// Contains the on-premises domainFQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "onPremisesDomainName", Required = Newtonsoft.Json.Required.Default)]
        public string OnPremisesDomainName { get; set; }

        /// <summary>
        /// Gets or sets on premises sam account name.
        /// Contains the on-premises samAccountName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "onPremisesSamAccountName", Required = Newtonsoft.Json.Required.Default)]
        public string OnPremisesSamAccountName { get; set; }

        /// <summary>
        /// Gets or sets on premises user principal name.
        /// Contains the on-premises userPrincipalName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "onPremisesUserPrincipalName", Required = Newtonsoft.Json.Required.Default)]
        public string OnPremisesUserPrincipalName { get; set; }

        /// <summary>
        /// Gets or sets other mails.
        /// A list of additional email addresses for the user; for example: ['bob@contoso.com', 'Robert@fabrikam.com']. Supports $filter.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "otherMails", Required = Newtonsoft.Json.Required.Default)]
        public IEnumerable<string> OtherMails { get; set; }

        /// <summary>
        /// Gets or sets password policies.
        /// Specifies password policies for the user. This value is an enumeration with one possible value being 'DisableStrongPassword', which allows weaker passwords than the default policy to be specified. 'DisablePasswordExpiration' can also be specified. The two may be specified together; for example: 'DisablePasswordExpiration, DisableStrongPassword'.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "passwordPolicies", Required = Newtonsoft.Json.Required.Default)]
        public string PasswordPolicies { get; set; }

        /// <summary>
        /// Gets or sets office location.
        /// The office location in the user's place of business.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "officeLocation", Required = Newtonsoft.Json.Required.Default)]
        public string OfficeLocation { get; set; }

        /// <summary>
        /// Gets or sets postal code.
        /// The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "postalCode", Required = Newtonsoft.Json.Required.Default)]
        public string PostalCode { get; set; }

        /// <summary>
        /// Gets or sets preferred language.
        /// The preferred language for the user. Should follow ISO 639-1 Code; for example 'en-US'.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "preferredLanguage", Required = Newtonsoft.Json.Required.Default)]
        public string PreferredLanguage { get; set; }

        /// <summary>
        /// Gets or sets proxy addresses.
        /// For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com'] The any operator is required for filter expressions on multi-valued properties. Read-only, Not nullable. Supports $filter.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "proxyAddresses", Required = Newtonsoft.Json.Required.Default)]
        public IEnumerable<string> ProxyAddresses { get; set; }

        /// <summary>
        /// Gets or sets show in address list.
        /// true if the Outlook global address list should contain this user, otherwise false. If not set, this will be treated as true. For users invited through the invitation manager, this property will be set to false.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "showInAddressList", Required = Newtonsoft.Json.Required.Default)]
        public bool? ShowInAddressList { get; set; }

        /// <summary>
        /// Gets or sets state.
        /// The state or province in the user's address. Supports $filter.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "state", Required = Newtonsoft.Json.Required.Default)]
        public string State { get; set; }

        /// <summary>
        /// Gets or sets street address.
        /// The street address of the user's place of business.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "streetAddress", Required = Newtonsoft.Json.Required.Default)]
        public string StreetAddress { get; set; }

        /// <summary>
        /// Gets or sets surname.
        /// The user's surname (family name or last name). Supports $filter.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "surname", Required = Newtonsoft.Json.Required.Default)]
        public string Surname { get; set; }

        /// <summary>
        /// Gets or sets usage location.
        /// A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries.  Examples include: 'US', 'JP', and 'GB'. Not nullable. Supports $filter.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "usageLocation", Required = Newtonsoft.Json.Required.Default)]
        public string UsageLocation { get; set; }

        /// <summary>
        /// Gets or sets user principal name.
        /// The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant’s collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization. Supports $filter and $orderby.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "userPrincipalName", Required = Newtonsoft.Json.Required.Default)]
        public string UserPrincipalName { get; set; }

        /// <summary>
        /// Gets or sets user type.
        /// A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'. Supports $filter.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "userType", Required = Newtonsoft.Json.Required.Default)]
        public string UserType { get; set; }

        /// <summary>
        /// Gets or sets about me.
        /// A freeform text entry field for the user to describe themselves.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "aboutMe", Required = Newtonsoft.Json.Required.Default)]
        public string AboutMe { get; set; }

        /// <summary>
        /// Gets or sets birthday.
        /// The birthday of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "birthday", Required = Newtonsoft.Json.Required.Default)]
        public DateTimeOffset? Birthday { get; set; }

        /// <summary>
        /// Gets or sets hire date.
        /// The hire date of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "hireDate", Required = Newtonsoft.Json.Required.Default)]
        public DateTimeOffset? HireDate { get; set; }

        /// <summary>
        /// Gets or sets interests.
        /// A list for the user to describe their interests.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "interests", Required = Newtonsoft.Json.Required.Default)]
        public IEnumerable<string> Interests { get; set; }

        /// <summary>
        /// Gets or sets my site.
        /// The URL for the user's personal site.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "mySite", Required = Newtonsoft.Json.Required.Default)]
        public string MySite { get; set; }

        /// <summary>
        /// Gets or sets past projects.
        /// A list for the user to enumerate their past projects.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "pastProjects", Required = Newtonsoft.Json.Required.Default)]
        public IEnumerable<string> PastProjects { get; set; }

        /// <summary>
        /// Gets or sets preferred name.
        /// The preferred name for the user.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "preferredName", Required = Newtonsoft.Json.Required.Default)]
        public string PreferredName { get; set; }

        /// <summary>
        /// Gets or sets responsibilities.
        /// A list for the user to enumerate their responsibilities.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "responsibilities", Required = Newtonsoft.Json.Required.Default)]
        public IEnumerable<string> Responsibilities { get; set; }

        /// <summary>
        /// Gets or sets schools.
        /// A list for the user to enumerate the schools they have attended.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "schools", Required = Newtonsoft.Json.Required.Default)]
        public IEnumerable<string> Schools { get; set; }

        /// <summary>
        /// Gets or sets skills.
        /// A list for the user to enumerate their skills.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "skills", Required = Newtonsoft.Json.Required.Default)]
        public IEnumerable<string> Skills { get; set; }

        /// <summary>
        /// Gets or sets device enrollment limit.
        /// The limit on the maximum number of devices that the user is permitted to enroll. Allowed values are 5 or 1000.
        /// </summary>
        [JsonProperty(NullValueHandling = NullValueHandling.Ignore, PropertyName = "deviceEnrollmentLimit", Required = Newtonsoft.Json.Required.Default)]
        public Int32? DeviceEnrollmentLimit { get; set; }

    }
}
