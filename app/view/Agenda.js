Ext.define("uTraveller.view.Agenda", {
	extend: "Ext.Container",
	requires: [ "Ext.Toolbar" ],

	xtype: "agenda",


	config:{
		layout:{
			layout: 'vbox'
		} , 
		items:
			{
				xtype: "toolbar",
				title: "Agenda",
				docked: "top",
			}
	}
});