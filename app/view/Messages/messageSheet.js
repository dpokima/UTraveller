Ext.define('uTraveller.view.Messages.messageSheet',{
    extend:'Ext.ActionSheet',
    xtype: 'messagesheet',

    config:{
        id: "messagesheet",
        hidden: true,

        },

    initialize : function(){
        var self = this;
        self.add([
            {
                text: 'Delete Message',
                ui  : 'decline',
                action: 'sheet'
            },
            {
                text: 'Show Messages',
                action: 'sheet'
            },
            {
                text: 'Cancel',
                ui  : 'confirm',
                action: 'sheet',
                handler: function (btn, evt) {
                    self.hide()
                }
            }
        ]);
    }
});