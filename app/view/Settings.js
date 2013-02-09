Ext.define("uTraveller.view.Settings", {
	extend: "Ext.Container",
	requires: [ "Ext.Toolbar" ],

	xtype: "settings",


	config:{
		layout:{
			layout: 'vbox'
		} , 
		items:
			{
				xtype: "toolbar",
				title: "Settings",
				docked: "top",
			}
	}
});