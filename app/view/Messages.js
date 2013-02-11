Ext.define("uTraveller.view.Messages", {
	extend: "Ext.Panel",
	requires: [ "Ext.Toolbar" ,'uTraveller.classes.list.messageList'],

	xtype: "messages",


	config:{
		id: "messages",
		cls: "messages",
		width: '100%',
		height: '100%',
		items:{
			xtype: 'messagelist',
		}

	},
	initialize: function(){
		var self = this;
	},

});