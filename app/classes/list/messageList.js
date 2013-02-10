Ext.define('uTraveller.classes.list.messageList',{
	extend:'Ext.Container',
	xtype: 'messagelist',
	requires:['uTraveller.classes.list.messageItem'],

	config:{
		cls: 'messagelist',
		layout: 'vbox',	 
	},

	initialize: function() {
		var self = this;
		console.log("started");
		var users =  Ext.getStore("Users");

		users.each(function (user) {
		    self.add({
				xtype: 'messageitem',
				user: user,
			});
		});
	}
});
