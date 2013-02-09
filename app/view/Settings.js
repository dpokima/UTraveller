Ext.define("uTraveller.view.Settings", {
	extend: "Ext.Container",
	requires: [ "Ext.Toolbar",
	'uTraveller.classes.list.settingList' ],

	xtype: "settings",


	config:{
		scrollable: true,
		layout:{
			layout: 'vbox'
		} , 

		items:[
			{
				xtype: "toolbar",
				title: "Settings",
				docked: "top",
			},
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
				cont: "Notification"
			}
			] 
	}
});