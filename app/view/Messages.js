Ext.define("uTraveller.view.Messages", {
	extend: "Ext.Panel",
	requires: [ "Ext.Toolbar" ,'uTraveller.classes.list.messageList'],

	xtype: "messages",


	config:{
		layout : "fit",
		cls: "messages",
		items:{
			xtype: 'messagelist',
		}

	},
	initialize: function(){
		var self = this;
		self.add(
		[{
			html: "brand New"
		},
		{
			html: "test"
		}]
		);
		console.log("self");
		console.log(self);
		this.setActiveItem(1);
	}
});