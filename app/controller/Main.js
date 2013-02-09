Ext.define('uTraveller.contoller.main',{
	extend: "Ext.app.Contoller",
	xtype: "mainControl",

	config:{
		views: ['Settings', 'Main','uTraveller.classes.list.settingList'],
		stores: [],
		models: [],


	},

	init : function() {
		console.log("Initialized");
		this.control({
			"Settinglist":{
				settingtap : function (){
					console.log(arguments);
				}
			}
		});
		this.callParent(arguments);
	},
});