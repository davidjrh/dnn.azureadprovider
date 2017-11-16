# DNN Azure Active Directory provider
### Latest release [![Latest release](https://intelequia.blob.core.windows.net/images/DNNAzureAD_LatestRelease.svg)](https://github.com/davidjrh/dnn.azureadprovider/releases/latest)

The DNN Azure Active Directory Provider is an Authentication provider for DNN Platform that uses Azure Active Directory OAuth2 authentication to authenticate users.

![alt text](https://intelequia.blob.core.windows.net/images/DNNAzureADv3_1.png "Sign-in with Azure AD")

![alt text](https://intelequia.blob.core.windows.net/images/DNNAzureADv3_2.png "Sign-in with Azure AD")

![alt text](https://intelequia.blob.core.windows.net/images/DNNAzureADv3_3.png "Sign-in with Azure AD")

## Requirements
* For v1.x: **DNN Platform 7.4.1 or later** (special mention to Evan Smith for the pull request that made this possible https://github.com/dnnsoftware/Dnn.Platform/pull/250)
* For v3.x: **DNN Platform 9.0.0 or later**

## Installation and configuration guide
This guide has two parts:
* How to setup Azure Active Directory
* How to install the authorization provider in our DNN deployment and how to setup the AD parameters we created before

Following this two steps, you will give access to all your Azure AD users to register and sign-in into your DNN application. You can go later and harden your security settings like only allow to access the DNN Web Application to certain users on the Azure portal. Also note that depending on whether you have "Public" or "Private" user account registration on your DNN portal, you will need to approve the registered user before allowing him to access the site.

### Azure Active Directory setup
1. Go to https://portal.azure.com to setup the required applications on your Azure Active Directory. You need to use the user credentials of a user with at least "Service Admin" role. 
2. In the left-hand navigation pane, click the Azure Active Directory service, click **App registrations**, and click **New application registration**.
3. When the **Create** page appears, enter your application's registration information:
    * **Name**: Enter a meaningful application name. This can be any name you want and is simply how you will identify the application in your Azure Active Directory (i.e. "My Contoso WebAPI").
    * **Application type**: Select "Web app / API" (notice that Web Applications and Web API’s are considered the same type of application as far as Azure AD is concerned)
    * **Sign-On URL**: This is the URL where user can sign in and use your app. In a typical DNN site, this should be something like "http://mysite.com/Login". You can change this URL later.
4. <a name="applicationid"></a> When finished, click **Create**. Azure AD assigns a unique **Application ID** to your application, and you're taken to your application's main registration page.
5. Click on the name of the app we've just created and then on "All settings" > "Required permissions" > "Windows Azure Active Directory". Ensure that the app has, at least, **Sign in and read user profile** checked, in the **Delegated permissions** section.
6. <a name="getaadkey"></a> Now on the **Settings** page, under the **keys** section, create a new key with the desired expiration. Click on Save and then copy the key to a secure location. `IMPORTANT: you won't be able to copy this key later, so copy it now or generate a new one when needed.`

### DNN provider installation and configuration
It's important to remember that you need a DNN deployment with **version 7.4.1 or later** for v1.0.1 and **version 9.0.0 or later** for v3.0 to continue. 

1. Download the DNN Azure AD provider from the Releases folder (i.e. AzureADProvider_03.00.00_Install.zip) https://github.com/davidjrh/dnn.azureadprovider/releases
2. Login into your DNN Platform website as a host user and install the provider from the "Host > Extensions" page
3. Use the **Install Extension Wizard** to upload and install the file you downloaded on step 1. Once installed, you can setup the provider from two different places:
    * Using the legacy settings page, under the section **Authentication Systems** of the Extensions page:
![alt text](https://intelequia.blob.core.windows.net/images/DNNAzureADv3_4.png "AAD settings v1")
    * Using the new settings page, under the section **Azure Active Directory** on the Persona Bar:
![alt text](https://intelequia.blob.core.windows.net/images/DNNAzureADv3_5.png "AAD settings v3")

The settings page is very straightforward. It only requires three parameter from your Azure AD application:
* **Directory Tenant ID**: You can get this parameter from the **Properties** section of your active directory (it's the value of the field **Directory ID**)
* **App ID**: This is the **Application ID** of the application you created in [step 4](#applicationid) of the previous section of this guide
* **Secret**: This is the **Key** that you generated in [step 6](#getaadkey) of the previous section
* **Enabled**: Use this switch to enable/disable the provider
* **Auto-Redirect**: This option allows you to automatically redirect your login page to the Azure AD login page
![alt text](https://intelequia.blob.core.windows.net/images/DNNAzureADv3_6.png "AAD settings")

## Known issues
### 400 Bad Request ("Invalid URL") when running on Azure Websites
When running on Azure Websites, and just after successfully sign in, the webflow redirects the user to the website with the authorization code in the query string. If the site is using the DNNFriendlyURL module configured in "advanced", the querystring will be changed to a "pretty URL" with slashes "/". This causes a 400 Bad Request because the code value is too long for passing this way.

To avoid the issue, and following the instructions described at http://www.dnnsoftware.com/wiki/keeping-querystring-items-out-of-the-url-path-in-dnn, you need to update the **AUM_KeepInQueryStringRegex** setting of the Friendly URL provider. The regex to append to the existing value is `|(/code/[^/]+)`, by using the following query:

```sql
UPDATE dnn_HostSettings 
   SET SettingValue='/nomo/\d+|/runningDefault/[^/]+|/popup/(?:true|false)|/(?:page|category|sort|tags)/[^/]+|(/utm[^/]+/[^/]+)+|(/code/[^/]+)'
 WHERE SettingName='AUM_KeepInQueryStringRegex'
```

## References
* Azure Active Directory Part 2: Building Web Applications for Azure AD, Rick Rainey (http://justazure.com/azure-active-directory-part-2-building-web-applications-azure-ad/) 
* What exactly is the App ID URI when adding a new Azure AD Application? https://social.msdn.microsoft.com/Forums/en-US/1bab0034-d01e-431b-9562-b7e9d7b2a180/what-exactly-is-the-app-id-uri-when-adding-a-new-azure-ad-application?forum=WindowsAzureAD
