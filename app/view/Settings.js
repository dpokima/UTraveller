Ext.define("uTraveller.view.Settings", {
	extend: "Ext.NavigationView",
	requires: [ "Ext.Toolbar",
	'uTraveller.classes.list.settingList' ],

	xtype: "settings",
	id: "settingView",


	config:{
		useTitleForBackButtonText: true,
	items:{
			title: "Settings",
			scrollable: true,
			layout:{
				layout: 'vbox'
			} , 
			items:
			[ 
			{
				xtype: "Settinglist",
				cont: "Profile"
			},
			{
				xtype: "Settinglist",
				cont: "Chat Settings"
			},
			{
				xtype: "Settinglist",
				cont: "Blocked Users"
			},
			{
				xtype: "Settinglist",
				cont: "About"
			},
			{
				xtype: "Settinglist",
				cont: "Help"
			},
			{
				xtype: "Settinglist",
				cont: "Tell a Friend"
			},
			{
				xtype: "Settinglist",
				cont: "Notifications"
			}
			]}
	}
});