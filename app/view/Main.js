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

        items: [
            {
                title: 'Home',
                iconCls: 'home',
                layout: "fit",
                items: {
                        xtype: "home"
                },

                styleHtmlContent: true,
                scrollable: true,

            },
            {
                title: 'Contacts',
                iconCls: 'team',
                layout: "fit",
                items: {
                        xtype: "contacts"
                }

            },
            {
                title: 'Agenda',
                iconCls: 'time',
                layout: "fit",
                items: {
                        xtype: "agenda"
                }

            },
            {
                title: 'Messages',
                iconCls: 'action',
                layout: "fit",
                items: {
                        xtype: "messages"
                }

            },
            {
                title: 'Settings',
                iconCls: 'settings',
                layout: "fit",
                items: {
                        xtype: "settings"
                }

            },

        ]
    }
});
