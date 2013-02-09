Ext.define("uTraveller.view.Contacts", {
	extend: "Ext.Container",
	requires: [ "Ext.Toolbar" ],

	xtype: "contacts",


	config:{
		cls: "settingList",
		layout:{
			layout: 'vbox'
		} , 
		items:
			{
				xtype: "toolbar",
				title: "Contacts",
				docked: "top",
			}
	}
});