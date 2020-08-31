# Using custom claim mappings on DNN Azure AD module

<p>With the arrival of the <a href="https://github.com/davidjrh/dnn.azureadprovider">DNN Azure AD v4.0.x module</a>, lot of new settings have been introduced to support scenarios that were already resolved with the <a href="https://github.com/intelequia/dnn.azureadb2cprovider">twin module for Azure AD B2C</a>. Things such as Role Sync, Profile sync (including the profile picture), JWT auth using Azure AD tokens on DNN WebAPI controllers, reusing the client-side token to call other services outside DNN and claim mapping are now supported.
</p>
<p>Before continue reading, please note that Azure AD is supporting now 1.0 and 2.0 (preview) tokens, and there are some differences between them. I recommend to read "<a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims">How to: Provide optional claims to your app</a>" article
</p>
<p style="margin-left: 36pt;"><em>"While optional claims are supported in both v1.0 and v2.0 format tokens, as well as SAML tokens, they provide most of their value when moving from v1.0 to v2.0. One of the goals of the <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-overview">v2.0 Microsoft identity platform</a> endpoint is smaller token sizes to ensure optimal performance by clients. As a result, several claims formerly included in the access and ID tokens are no longer present in v2.0 tokens and must be asked for specifically on a per-application basis."
</em></p>
<p>I'm currently working on adapting the DNN Azure AD module v5.0 to fully supports the v2.0 Microsoft Identity Platform endpoint. The following instructions work for DNN Azure AD module v4.0.3 and later.
</p>
<h1>Configuring claim mappings
</h1>
<p>Let's start today with the new "User Mappings" tab.
</p>
<p><img alt="" src="https://intelequia.com/Portals/0/Blog/Files/21/2048/b5935221-f085-4991-9b41-cc6ee4549eb2.png" />
</p>
<p>The new mappings tab has three subareas:
</p>
<ul>
    <li>
    <div><strong>User Mappings</strong>: area to specify how user mappings are done, by mapping user DNN user properties with claims available on the JWT issued token from Azure AD once signed in. These properties are fixed:
    </div>
    <ul>
        <li><strong>PortalId</strong>: (optional) Allows to specify a claim to map the user portal ID. Note that this must be implemented with an Azure AD User attribute through application extensions, see more on this later below;
        </li>
        <li><strong>Id</strong>: Allows to specify which claim will be used as User Id. By default, will be the "upn" (user principal name). You can potentially use "upn" or "unique_name" (this only only on v1.0 tokens), that looks like username@domainname (or <a href="mailto:username@tenant.onmicrosoft.com">username@tenant.onmicrosoft.com</a>), the "oid" (object ID) claim that is the guid of the Azure AD user object, or any other claim uniquely that identifies the user, such as an Azure AD User attribute through application extensions with, for example, the EmployeeID as value.
        </li>
        <li><strong>FirstName: </strong>Allows to specify which claim will be used as first name. By default, the "given_name" claim
        </li>
        <li><strong>LastName: </strong>Allows to specify which claim will be used as last name. By default, the "family name" claim
        </li>
        <li><strong>DisplayName:</strong> Allows to specify which claim will be used as display name. By default, the "name" claim
        </li>
        <li><strong>Email:</strong> Allows to specify which claim will be used as e-mail. By default, the "upn" claim. The "email" claim can also be setup after adding it as optional claim to the token on the Azure portal, on the application token configuration section. This also requires to grant the "email" permission to the Azure AD application.
        </li>
    </ul>
    </li>
    <li><strong>User Profile Mappings:</strong> area to specify mappings between user profile properties and token claims. Works in the same way than the user mappings, but you will be using mostly optional and custom claims setup on the Azure AD Application. See how to setup optional and custom claims below.
    </li>
    <li><strong>Role Mappings:</strong> this allows to map Azure AD roles with DNN roles. Has nothing to do with claims, and another article talking about role sync setup is coming.
    </li>
</ul>
<p>The list of supported claims for an application can be obtained from:
</p>
<ul>
    <li>
    <div style="background: white;"><span style="color: #24292e;"><span style="font-size: 10pt; font-family: 'Segoe UI';">v1.0 tokens:&nbsp;</span><span style="font-size: 9pt; font-family: Consolas;">https://login.microsoftonline.com/{tenant}/.well-known/openid-configuration?appid={client-id}</span><span style="font-size: 10pt; font-family: 'Segoe UI';">
    </span></span></div>
    </li>
    <li>
    <div style="background: white;"><span style="color: #24292e;"><span style="font-size: 10pt; font-family: 'Segoe UI';">v2.0 tokens:&nbsp;</span><span style="font-size: 9pt; font-family: Consolas;">https://login.microsoftonline.com/{tenant}/v2.0/.well-known/openid-configuration?appid={client-id}</span><span style="font-size: 10pt; font-family: 'Segoe UI';">
    </span></span></div>
    </li>
</ul>
<p>Plus, the "core claim set" present in every token regardless of the policy. These claims are also considered restricted and can't be modified. More info at&nbsp;<a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-claims-mapping">https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-claims-mapping</a>
</p>
<p>Also note that "upn", "given_name", "family_name" and "unique_name" claims are part of the "core claim set" when using v1.0 tokens, but are not included by default when using v2.0 tokens. "unique_name" is only available on v1.0 so the recommendation is to use "upn" instead that is available on both versions.
</p>
<h1>Token configuration on the Azure AD application
</h1>
<p>Once you have <a href="https://github.com/davidjrh/dnn.azureadprovider">setup the application</a>, by default you will be using the v1.0 endpoint so tokens will have the "core claim set" by default. A default issued v1.0 token will look like the one below:
</p>
<p><img alt="" src="https://intelequia.com/Portals/0/Blog/Files/21/2048/4258d77f-a7a4-4e4f-9bd6-9cfb56bed79f.png" />
</p>
<p>The most interesting claims from the DNN point of view are:
</p>
<ul>
    <li>"aud" (Audience): the audience of the token, normally the Application ID unless you change the audience setting on the JWT Auth settings on the module advanced settings
    </li>
    <li>"exp" (Expires at): expiration datetime in "<a href="https://stackoverflow.com/questions/39926104/what-format-is-the-exp-expiration-time-claim-in-a-jwt/39926886">NumericDate</a>" format
    </li>
    <li>"amr" (Authentication Method References): indicating if the user used "pwd", "mfa", or other authentication methods
    </li>
    <li>"appid": the application id setup on the DNN module settings
    </li>
    <li>"family_name": the last name of the user as stored in Azure AD
    </li>
    <li>"given_name": the first name of the user as stored in the Azure AD
    </li>
    <li>"name": display name of the user as stored in the Azure AD
    </li>
    <li>"ipaddr": client IP address from where the token was requested
    </li>
    <li>"oid": object Id of the user as stored in the Azure AD
    </li>
    <li>"scp": scopes allowed for the token (the module issues a token for all the scopes configured unless something else is setup in the API Resource settings on the module advanced settings).
    </li>
    <li>"tid": Azure AD tenant id
    </li>
    <li>"unique_name": (only on v1.0 tokens), the unique name of the user. When using external providers such as MSA, can be in the format "live#user@tenant". Recommended to use "upn"
    </li>
    <li>"upn": the user principal name. Not available on v1.0 tokens and MSA (live.com, &hellip;) accounts.
    </li>
</ul>
<p>So, by default, the default DNN Azure AD module configuration supports the default token settings to make the things easier to setup.
</p>
<h1>Setting up optional claims
</h1>
<p>With v1.0 tokens, you can specify two types of additional optional claims:
</p>
<ul>
    <li>
    <div><strong>Built-in</strong>: you can specify optional built-in claims by selecting them through the token configuration application section or manually editing them directly through the manifest:
    </div>
    <p><img alt="" src="https://intelequia.com/Portals/0/Blog/Files/21/2048/701abd3e-baf8-4987-aacd-b6589413586e.png" />
    </p>
    </li>
    <li>
    <div><strong>Extension attributes: </strong>you can create your own directory schema extensions for the application on the "Users" object and store your personal attributes directly on Azure AD. In order to do it, you need to modify the Azure AD schema first. <strong>
    </strong></div>
    <ul>
        <li>Open a new Azure Cloud Shell in the Azure portal (icon on the top right portal area) using a PowerShell console, and run the following commands
        </li>
        <li>
        <div>Login into Azure Active Directory
        </div>
        <p><span style="font-family: 'Courier New';">&gt; Connect-AzureAD
        </span></p>
        <p>&nbsp;</p>
        </li>
        <li>
        <div>Set a variable with the application object Id. Note that this isn't the AppID, is the Application Object Id available on the application settings page on the Azure portal
        </div>
        <p><span style="font-family: 'Courier New';">&gt; $appObjectId = "xxxxxxx-xxxxx-xxxxx-xxxxx-xxxxxxxxxx"</span>
        </p>
        <p>&nbsp;</p>
        </li>
        <li>
        <div>Create the application extension property "Department"
        </div>
        <p><span style="font-family: 'Courier New';">&gt; New-AzureADApplicationExtensionProperty -ObjectId $appObjectId -Name "Department" -DataType "String" -TargetObjects "User"</span>
        </p>
        </li>
    </ul>
    <p>&nbsp;</p>
    <p style="margin-left: 36pt;"><img alt="" src="https://intelequia.com/Portals/0/Blog/Files/21/2048/6cb32b4e-e811-4398-97fd-9f5a57ef9cc6.png" />
    </p>
    <ul>
        <li>
        <div>Now set the setting of this user through the Graph API or just by executing the following PowerShell command, where $userObjId is the object Id of the user and &lt;appId&gt; is the App Id without dashes
        </div>
        <p><span style="font-family: 'Courier New';">&gt; Set-AzureADUserExtension -ObjectId $userObjectId -ExtensionName "extension_&lt;appId&gt;_Department" -ExtensionValue "Cloud Security"
        </span></p>
        <p><img alt="" src="https://intelequia.com/Portals/0/Blog/Files/21/2048/c23978fe-c775-48fa-95a0-57d12300e335.png" />
        </p>
        <p>&nbsp;</p>
        <p>Once this is done, you can select the extension from the optional claims UI. The claim name will be "extn.&lt;attributeName&gt;" on the JWT token.
        </p>
        <p><img alt="" src="https://intelequia.com/Portals/0/Blog/Files/21/2048/44c9117a-8c20-4741-a12b-355448d738c4.png" />
        </p>
        </li>
    </ul>
    </li>
</ul>
<p>&nbsp;</p>
<p>Now if you login again into the site, you will have the new claims as part of your token, and you can use them for mapping to user or profile properties.
</p>
<p>&nbsp;</p>
<p><img alt="" src="https://intelequia.com/Portals/0/Blog/Files/21/2048/c2680e97-95d7-458a-aa0a-bdb6a2bb1d4b.png" />
</p>
<p>&nbsp;</p>
<h1>Mapping non built-in Azure AD user object properties and more
</h1>
<p>All of what we have seen before has been done by using v1.0 tokens. What about adding non built-in properties, such as office location, phone number and so on? You can start using the new v2.0 tokens even while still using the 1.0 auth endpoint. How? I recommend first to take a look to the article "<a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-claims-mapping">How to: Customize claims emitted in tokens for a specific app in a tenant (Preview)"</a>. Currently this way of customizing the claims is supported only by PowerShell, and when implemented, supersedes the claims customization offered through the portal today. Configurations made through the methods detailed in this section will not be reflected in the Azure portal (at the time of writing).
</p>
<ul>
    <li>
    <div>Edit the application manifest and set:
    </div>
    <p style="margin-left: 36pt;"><span style="font-family: 'Courier New';">"acceptMappedClaims": true,
    </span></p>
    <p style="margin-left: 36pt;"><span style="font-family: 'Courier New';">"accessTokenAcceptedVersion": 2
    </span></p>
    <p style="margin-left: 36pt;">&nbsp;</p>
    <p><img alt="" src="https://intelequia.com/Portals/0/Blog/Files/21/2048/d59e1dda-635f-464d-9a94-1225210e7fa0.png" />
    </p>
    <p>&nbsp;</p>
    </li>
    <li>
    <div>Open a PowerShell session in your desktop and install the AzureADPreview module (I tried to run this into the Azure Cloud Shell, and while I wasn't able to run the necessary commands):
    </div>
    <p><span style="font-family: 'Courier New';">&gt; Install-Module AzureADPreview
    </span></p>
    <p>&nbsp;</p>
    </li>
    <li>
    <div>Login into Azure Active Directory
    </div>
    <p><span style="font-family: 'Courier New';">&gt; Connect-AzureAD
    </span></p>
    <p>&nbsp;</p>
    </li>
    <li>
    <div>Obtain the service principal object
    </div>
    <p><span style="font-family: 'Courier New';">&gt; $appID = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx"  # The AppID of the application
    </span></p>
    <p><span style="font-family: 'Courier New';">&gt; $svcPrincipal = Get-AzureADServicePrincipal -Filter "servicePrincipalNames/any(n: n eq '$appID')"
    </span></p>
    <p>&nbsp;</p>
    </li>
    <li>
    <div>Create a new Azure AD policy
    </div>
    <p>&nbsp;</p>
    <p><span style="font-family: 'Courier New';">&gt; $policy = New-AzureADPolicy -Definition @('{"ClaimsMappingPolicy":{"Version":1,"IncludeBasicClaimSet":"true", "ClaimsSchema": [{"Source":"user","ID":"physicalDeliveryOfficeName","JwtClaimType":"officename"},{"Source":"user","ID":"country","JwtClaimType":"country"},{"Source":"user","ID":"givenName","JwtClaimType":"given_name"},{"Source":"user","ID":"surname","JwtClaimType":"family_name"},{"Source":"user","ID":"displayName","JwtClaimType":"name"},{"Source":"user","ID":"userPrincipalName","JwtClaimType":"upn"}]}}') -DisplayName "IntelequiaWebMappings" -Type "ClaimsMappingPolicy"
    </span></p>
    <p>&nbsp;</p>
    </li>
    <li>
    <div>Assign the new policy to the application
    </div>
    <p><span style="font-family: 'Courier New';">&gt; Add-AzureADServicePrincipalPolicy -Id $svcPrincipal.ObjectId -RefObjectId $policy.Id
    </span></p>
    <p>&nbsp;</p>
    </li>
    <li>
    <div>Create an application signing key if not created before. This is necessary to use policy-based claims.
    </div>
    <p><span style="font-family: 'Courier New';">&gt; $appObjectId = "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyy" # This is the object id of the application that can be found in the portal, not the application Id
    </span></p>
    <p><span style="font-family: 'Courier New';">&gt; New-AzureADApplicationKeyCredential -ObjectId $appObjectId -CustomKeyIdentifier "MySigningKey" -StartDate "11/7/2020" -Type "Symmetric" -Usage "Sign" -Value "P@assw0rd1!"
    </span></p>
    <p>&nbsp;</p>
    </li>
</ul>
<p>As result, we get a token like the one below. Note that the token includes the core claims set and the optional ones specified in the portal (because in the policy the "IncludeBasicClaimSet" was set to "true"), plus the claims added by setting the policy to the application.
</p>
<p><img alt="" src="https://intelequia.com/Portals/0/Blog/Files/21/2048/e5048999-db14-4425-88ce-ee21105afa24.png" /><span style="font-family: 'Courier New';">
</span></p>
<h1>References
</h1>
<ul>
    <li><a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-claims-mapping">How to: Customize claims emitted in tokens for a specific app in a tenant (Preview)</a>
    </li>
    <li><a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims">How to: Provide optional claims to your app</a>
    </li>
    <li><a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-schema-extensions">Using directory schema extension attributes in claims</a></li>
</ul>
