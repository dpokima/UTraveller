Ext.define('uTraveller.controller.Message', {
    extend: 'Ext.app.Controller',
    
    config: {
        views: ['Messages',
                'uTraveller.classes.list.messageList',
                'messageView',
                "uTraveller.view.Messages.userMessage",
                'uTraveller.view.Messages.messageSheet'],
        
        refs: {
            message: "#messages",
            messageview: '#messageview',  
            messagesheet: "#messagesheet"        
        },
        control: {
            'messageitem':{
                messagetap : "userMessages",
                
                messagehold: "showMessageSheet"
                
            },
            "button[action=newMessage]" : {
                tap: function(){
                    console.log("New Message");
                }
            },
            "button[action=returnToMessages]": {
                tap: "allMessages"
            }

           
        }
    },

    showMessageSheet :function(user){
        var messageSheet = this.getMessagesheet();
        messageSheet.show();
    },
    
    userMessages: function(id ,name, user){
        messageView = this.getMessageview();
        messageView.showMessage(name,user);
    },

    allMessages: function(){
        console.log("called");
        messageView = this.getMessageview();
        messageView.removeMessage();

    },
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        console.log("Message Controller");
        
    }
});