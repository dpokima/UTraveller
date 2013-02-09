Ext.define('uTraveller.contoller.Main',{
	extend: "Ext.app.Contoller",
	xtype: "mainControl",

	config:{
		views: ['Settings', 'Main','uTraveller.classes.list.settingList']


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