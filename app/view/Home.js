Ext.define("uTraveller.view.Home", {
	extend: "Ext.Container",
	requires: [ "Ext.Toolbar" ],

	xtype: "home",


	config:{
		layout:{
			layout: 'vbox'
		} , 
		items:
			{
				xtype: "toolbar",
				title: "Home",
				docked: "top",
			}
	}
});