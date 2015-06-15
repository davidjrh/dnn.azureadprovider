<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Login.ascx.cs" Inherits="DotNetNuke.Authentication.Azure.Login" %>
<%@ Register TagPrefix="dnnC" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<dnnC:DnnCssInclude ID="AzureCss" runat="server" FilePath="~/DesktopModules/AuthenticationServices/Azure/module.css" />


<li id="loginItem" runat="server" class="azure" >
    <asp:LinkButton runat="server" ID="loginButton" CausesValidation="False">
        <span><%=LocalizeString("LoginAzure")%></span>
    </asp:LinkButton>
</li>
<li id="registerItem" runat="Server" class="azure">
    <asp:LinkButton ID="registerButton" runat="server" CausesValidation="False">
        <span><%=LocalizeString("RegisterAzure") %></span>
    </asp:LinkButton>
</li>
