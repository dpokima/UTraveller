Ext.define('uTraveller.controller.Message', {
    extend: 'Ext.app.Controller',
    
    config: {
        views: ['Messages','uTraveller.classes.list.messageList',],
        
        refs: {
            message: "#messages"          
        },
        control: {
            'messageitem':{
                messagetap :function(id, name){
                    console.log(name);
                    this.userMessages(name);
                }

            }
        }
    },
    
    userMessages: function(name){
        messageView = this.getMessage();
        messageView.showMessage(name)
    },
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});