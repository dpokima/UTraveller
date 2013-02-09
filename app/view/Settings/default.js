Ext.define('uTraveller.view.Settings.default',{
	extend: "Ext.Container",
	xtype: "defaultSetting",

	requires:[
		'uTraveller.view.Settings.contactInfo'
		],

	config:{
		layout:'fit'


	},
	setContactInfo: function(){
		this.add({
			xtype:"contactInfo"
		});
	}
});