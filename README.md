# DNN Azure Active Directory provider
The DNN Azure Active Directory Provider is an Authentication provider for DNN Platform that uses Azure Active Directory OAuth2 authentication to authenticate users.

Requirements:
* DNN Platform 7.4.1 or later

## Installation and configuration guide
1. Go to https://manage.windowsazure.com to setup the required applications on your Azure Active Directory. You need to use the user credentials of an user having at least "Service Admin" role. 
2. From the Azure Active Directory list, select the Directory you are going to setup
3. Select the applications tab to create the two needed applications. On the scenario we are going to deploy we have a client application (the DNN web application) that will make requests to a Web API (the "resource" on the OAuth webflow). First of all we will setup the Web API app with permissions to read the AD, and then setup the second DNN Web app that has permissions to access the first app.
  1. Click on "Add" button from the bottom bar to start the application wizard
  2. Click on "Add an application my organization is developing"
  3. Set the "name" of your Web API application. This can be any name you want and is simply how you will identify the application in your Azure Active Directory (i.e. MyContosoWebAPI).
  4. Set the type of application to "Web application and/or Web API" (notice that Web Applications and Web API’s are considered the same type of application as far as Azure AD is concerned), and click Next.
  5. Set the "Sign-on URL". This is the URL where users will access your application. There is no verification of this URL so even if the application hasn’t been developed yet the portal will still let you add it. (i.e. "https://mycontoso.com/login")
  6. Set the "App Id URI". Notice this is a URI and not a URL. This is what Azure AD will use to identify your application when authentication users requesting access to it. It can be practically anything you want as long as it is *unique in your directory and a valid URI*. (i.e. "https://mycontoso.com/mywebapi")


References:
* Azure Active Directory Part 2: Building Web Applications for Azure AD, Rick Rainey (http://justazure.com/azure-active-directory-part-2-building-web-applications-azure-ad/) 
* What exactly is the App ID URI when adding a new Azure AD Application? https://social.msdn.microsoft.com/Forums/en-US/1bab0034-d01e-431b-9562-b7e9d7b2a180/what-exactly-is-the-app-id-uri-when-adding-a-new-azure-ad-application?forum=WindowsAzureAD
