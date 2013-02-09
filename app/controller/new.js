Ext.define('uTraveller.controller.new', {
    extend: 'Ext.app.Controller',
    
    config: {
        views: ['Settings', 'Main','uTraveller.classes.list.settingList'],
        refs: {
            
        },
        control: {
            "Settinglist":{
                settingtap : function (){
                    console.log(arguments);
                }
            }
            
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        console.log(app);
        
    }
});