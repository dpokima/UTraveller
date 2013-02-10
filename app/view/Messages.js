Ext.define("uTraveller.view.Messages", {
	extend: "Ext.Panel",
	requires: [ "Ext.Toolbar" ,'uTraveller.classes.list.messageList','uTraveller.view.Messages.default'],

	xtype: "messages",


	config:{
		id: "messages",
		layout : {
            type      : 'card',
            animation : 'flip'
        },
		cls: "messages",
		width: '100%',
		height: '100%',
		items:{
			xtype: 'messagelist',
		}

	},
	initialize: function(){
		var self = this;
		console.log("self");
		console.log(self.getActiveItem());
		console.log("self");
		self.setActiveItem(0);
	},
	showMessage: function(user){
		var self = this;
		self.add({
			xtype: "defaultM",
			user: user
		})
		self.setActiveItem(1);
	},
	removeMessage: function(){
		var self = this;
		self.remove("defaultM", true);
		self.setActiveItem(0);
	}








});