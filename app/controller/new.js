Ext.define('uTraveller.controller.new', {
    extend: 'Ext.app.Controller',
    
    config: {
        views: ['Settings', 'Main','uTraveller.classes.list.settingList','uTraveller.view.Settings.default'],
        refs: 
        {
            settingView :'#settingView',
            defaultS : {
                selector: 'settings defaultSetting',
                xtype: "defaultSetting",
                autoCreate: true
                }
        },
        
        
        control: {
            "Settinglist": {
                settingtap : function (){
                    console.log(arguments);
                    this.test();
                }
            }
            
        }
    },

    test: function(){
        var view = this.getSettingView();
        var defaultS = this.getDefaultS();
        console.log("adding");
        view.push(defaultS);
    },

    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        console.log(app.views.pop);
    }
});