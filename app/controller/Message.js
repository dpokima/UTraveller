Ext.define('uTraveller.controller.Message', {
    extend: 'Ext.app.Controller',
    
    config: {
        views: ['Messages',
                'uTraveller.classes.list.messageList',
                'messageView',
                "uTraveller.view.Messages.userMessage"],
        
        refs: {
            message: "#messages",
            messageview: '#messageview'          
        },
        control: {
            'messageitem':{
                messagetap :function(id, name, user){
                    console.log(name);
                    this.userMessages(name, user);
                }
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
    
    userMessages: function(name, user){
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
        
    }
});