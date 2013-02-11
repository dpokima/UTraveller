Ext.define('uTraveller.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [ "uTraveller.view.Settings",
                "uTraveller.view.Messages",
                "uTraveller.view.Agenda",
                "uTraveller.view.Contacts",
                "uTraveller.view.Home",
                'uTraveller.view.messageView'],
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
                        xtype: 'agenda',
                }

            },
            {
                title: 'Messages',
                iconCls: 'action',
                items:{
                        xtype: 'messageview',
                }

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
