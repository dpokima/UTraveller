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
                },
            contactForm: '#contactForm'
        },
        
        
        control: {
            "Settinglist": {
                settingtap : function (name){
                    console.log(name);
                    this.settingOption(name);
                }
            }
            
        }
    },

    settingOption: function(name){
        var view = this.getSettingView();
        var defaultS = this.getDefaultS();
        if(name.search("Help") != -1){
        defaultS.setContactInfo();
        }
        else{
            defaultS.setHtml(name);
        }
        console.log("adding to Navigation");
        view.push(defaultS);
    },

    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        console.log(app.views.pop);
    },

    submit: function() {
        var form = this.getContactForm();

        console.log(form);
    },
});