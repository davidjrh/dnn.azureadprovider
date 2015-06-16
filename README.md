# DNN Azure Active Directory provider
The DNN Azure Active Directory Provider is an Authentication provider for DNN Platform that uses Azure Active Directory OAuth2 authentication to authenticate users.

Requirements:
* DNN Platform 7.4.1 or later

## Installation and configuration guide
1. Go to https://manage.windowsazure.com to setup the required applications on your Azure Active Directory. You need to use the user credentials of an user having at least "Service Admin" role. 
2. From the Azure Active Directory list, select the Directory you are going to setup
3. Select the applications tab to create the two needed applications. On the scenario we are going to deploy we have a client application (the DNN web application) that will make requests to a Web API (the "resource" on the OAuth webflow). First of all we will setup the Web API app with permissions to read the AD, and then setup the second DNN Web app that has permissions to access the first app.
  1. Click on "Add" button from the bottom bar to start the application setup wizard
  2. Click on "Add an application my organization is developing"
  3. Set the "name" of your Web API application. This can be any name you want and is simply how you will identify the application in your Azure Active Directory (i.e. "My Contoso WebAPI").
  4. Set the type of application to "Web application and/or Web API" (notice that Web Applications and Web API’s are considered the same type of application as far as Azure AD is concerned), and click Next.
  5. Set the "Sign-on URL". This is the URL where users will access your application. There is no verification of this URL so even if the application hasn’t been developed yet the portal will still let you add it. (i.e. "https://mycontoso.com/login")
  6. Set the "App Id URI". Notice this is a URI and not a URL. This is what Azure AD will use to identify your application when authentication users requesting access to it. It can be practically anything you want as long as it is **unique in your directory and a valid URI**. (i.e. "https://mycontoso.com/mywebapi"). Click Finish to create the application.
  7. Ensure that on the "Configure" tab, under the "permissions to other applications", at least "Windows Azure Active Directory>Delegated Permissions>Enable sign-on and read users' profiles" is checked.
4. Now create the DNN Client Web App on Active Directory following the next steps:
  1. Again, from the "Applications" tab, click on "Add" button at the bottom bar to start the application setup wizard 
  2. Click on "Add an application my organization is developing"
  3. Set the "name" of your Web API application. (i.e. "My Contoso Web App")
  4. Set the "Sign-on URL". (i.e. "https://mycontoso.com/login")
  5. Set the "App Id URI". (i.e. "https://mycontoso.com/mywebapp"). Click Finish to create the application.
  6. Now on the "Configure" tab, under the "keys" section, create a new key with the desired expiration (currently 1 or 2 years). Click on Save and then copy the key to a secure location. IMPORTANT: you won't be able to copy this key later, so copy it now or generate a new one when needed.
  7. Now let's go and give permissions to the DNN Client Web App to access the Web API application we created before:
   1. Under the "permissions to other applications", click on the "Add Application" button
   2. On the "Show" dropdown list, select "All Apps" and then type on the "Starting with" textbox the name you specified when creating the Web API application (i.e. "My Contoso WebAPI"), and click on the search button
   3. Select the "My Contoso WebAPI" from the list below by clicking on the "+" icon and then click on the Finish button
   4. On the "My Contoso WebAPI" permissions row, check "Access MyContosoWebAPI" from the delegated permissions dropdown list.
   5. Click Save to finish.


References:
* Azure Active Directory Part 2: Building Web Applications for Azure AD, Rick Rainey (http://justazure.com/azure-active-directory-part-2-building-web-applications-azure-ad/) 
* What exactly is the App ID URI when adding a new Azure AD Application? https://social.msdn.microsoft.com/Forums/en-US/1bab0034-d01e-431b-9562-b7e9d7b2a180/what-exactly-is-the-app-id-uri-when-adding-a-new-azure-ad-application?forum=WindowsAzureAD
