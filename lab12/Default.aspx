<%@ Page Language="C#" MasterPageFile="~/MasterPages/Demo.master" AutoEventWireup="true" Title="Home" %>

<%@ Register TagPrefix="uc" TagName="Copyright" Src="~/UserControls/Copyright.ascx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h2>Welcome to the Master Page Demo</h2>
    <p>This is the content page.</p>
    <uc:Copyright ID="Copyright1" runat="server" />
</asp:Content>
