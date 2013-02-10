Ext.define("uTraveller.view.Messages", {
	extend: "Ext.Container",
	requires: [ "Ext.Toolbar" ,'uTraveller.classes.list.messageList'],

	xtype: "messages",


	config:{
		layout: 'vbox',
		items:{
				xtype: 'messagelist',
		} 

	}
});