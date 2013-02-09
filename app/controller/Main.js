Ext.define('uTraveller.contoller.Main',{
	extend: "Ext.app.Contoller",
	xtype: "mainControl",

	config:{
		views: ['Settings', 'Main','uTraveller.classes.list.settingList']
	},

	refs: [
		ref: 'contactForm',
		selector: '#contactForm',
	],

	init : function() {
		console.log("Initialized");
		this.control({
			"Settinglist":{
				settingtap : function (){
					console.log(arguments);
				}
			},
			'button[action=submitContact]'
		});
		this.callParent(arguments);
	},


});