Ext.define('uTraveller.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [ "uTraveller.view.Settings",
                "uTraveller.view.Messages",
                "uTraveller.view.Agenda",
                "uTraveller.view.Contacts",
                "uTraveller.view.Home"
    ],
    config: {
        tabBarPosition: 'bottom',
        defaults: {
            styleHtmlContent: true,
            layout: "fit",
        },
        items: [
            {
                title: 'Home',
                iconCls: 'home',
                items: {
                        xtype: "home"
                },
                
                scrollable: true,

            },
            {
                title: 'Contacts',
                iconCls: 'team',
                items: {
                        xtype: "contacts"
                }

            },
            {
                title: 'Agenda',
                iconCls: 'time',
                items: {
                        xtype: "agenda"
                }

            },
            {
                title: 'Messages',
                iconCls: 'action',
                layout: "vbox",
                styleHtmlContent: true,
                items:[
                {
                    xtype: 'titlebar',
                    docked: 'top',
                    title: 'Messages',
                   
                    items: [
                        {
                            iconCls: "add",
                            iconMask: true,
                            align: 'left',
                            text: 'New'
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
                    
                    items: {
                            xtype: "messages"
                    }
                }

                ],
            },
            {
                title: 'Settings',
                iconCls: 'settings',
                items: {
                        xtype: "settings"
                }

            },

        ]
    }
});
