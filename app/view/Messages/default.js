Ext.define('uTraveller.view.Messages.default',{
	extend:'Ext.Container',
	xtype: 'defaultM',
	user: 'Default',

	config:{

	},

	initialize: function(){
		var self = this;
		self.add({
				html: self.user
		});

	}
});