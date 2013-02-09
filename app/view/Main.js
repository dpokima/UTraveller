Ext.define('uTraveller.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [ "uTraveller.view.Settings"
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Home',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

            },
            {
                title: 'Contacts',
                iconCls: 'team',

            },
            {
                title: 'Agenda',
                iconCls: 'time',

            },
            {
                title: 'Message',
                iconCls: 'action',

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
