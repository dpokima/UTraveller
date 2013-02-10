Ext.define('uTraveller.controller.Message', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            views: ['Messages','uTraveller.classes.list.messageList',],

            
        },
        control: {
            'messageitem':{
                messagetap :function(){
                    console.log("I have been found");
                }

            }


            
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});