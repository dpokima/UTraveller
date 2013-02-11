Ext.define("uTraveller.view.Messages", {
	extend: "Ext.Panel",
	requires: [ "Ext.Toolbar" ,'uTraveller.classes.list.messageList','uTraveller.view.Messages.messageSheet'],

	xtype: "messages",


	config:{
		id: "messages",
		cls: "messages",
		width: '100%',
		height: '100%',
		items:[
		{
			xtype: 'messagelist'
		},
		{
			xtype: 'messagesheet'
		}
		]

	},
	initialize: function(){
		var self = this;
	},

});