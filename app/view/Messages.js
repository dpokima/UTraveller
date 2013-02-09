Ext.define("uTraveller.view.Messages", {
	extend: "Ext.Container",
	requires: [ "Ext.Toolbar" ],

	xtype: "messages",


	config:{
		layout:{
			layout: 'vbox'
		} , 
		items:
			{
				xtype: "toolbar",
				title: "Messages",
				docked: "top",
			}
	}
});