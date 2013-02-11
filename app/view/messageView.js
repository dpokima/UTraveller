Ext.define('uTraveller.view.messageView',{
	extend: 'Ext.Container',
	xtype: 'messageview',
	requires: ["uTraveller.view.Messages","uTraveller.view.Messages.userMessage"],
	config:{
		id: 'messageview',
		title: 'Messages',
        iconCls: 'action',
        layout: "card",
        styleHtmlContent: true,
        items:[
        		{
        			layout: "fit",
        			items:[
	                {
	                    xtype: 'titlebar',
	                    docked: 'top',
	                    height: 35,
	                    title: 'Messages',

	                    items: [
	                        {
	                        	xtype: "button",
	                            iconCls: "add",
	                            iconMask: true,
	                            align: 'left',
	                            text: 'New',
	                            action: "newMessage"
	                        },
	                        {
	                            iconCls: "delete",
	                            iconMask: true,
	                            align: 'right',
	                            text: 'Delete'
	                        }
	                        ]
	                },
	                {
	                   	xtype: "messages"
	                }]
            }
          	],
    },

    showMessage: function(name,user){
		var self = this;
		self.add({
			xtype: "usermessage",
			user: user,
			name: name
		})
		self.setActiveItem(1);
	},
	removeMessage: function(){
		var self = this;
		self.remove("usermessage", true);
		self.setActiveItem(0);
	}

});