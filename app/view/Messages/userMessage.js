Ext.define("uTraveller.view.Messages.userMessage",{
	extend: "Ext.Container",
	xtype: "usermessage",
	requires:[
	'uTraveller.view.Messages.default'
	],
	name: "",
	user: null,
	config:{

	},

	initialize: function(){
		var self = this;
		self.add({
        			layout: "fit",
        			items:[
	                {
	                    xtype: 'titlebar',
	                    docked: 'top',
	                    height: 35,
	                    title: self.name,

	                    items: [
	                        {
	                        	xtype: "button",
	                            iconCls: "action",
	                            iconMask: true,
	                            align: 'left',
	                            text: 'Messages',
	                            action: "returnToMessages",
	                        }
	                        ]
	                },
	                {
	                   	xtype: "defaultM",
	                   	user: self.name 
	                }]
            });

	}

	
});