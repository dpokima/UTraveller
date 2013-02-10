Ext.define('uTraveller.classes.tool.rankingEmo',{
	extend:'Ext.Container',
	xtype: 'rankingemo',
	ranking: 50,

	config:{
		height: 40,
		layout: 'hbox',

		
	},

	initialize: function(){
		
		var self = this;
		var cls  = '';
		if (self.ranking >= 90 ){
			cls = "purpleE" ;
		}
		else if (self.ranking >= 75 ){
			cls = "blueE" ;
		}
		else if (self.ranking >= 60 ){
			cls = "lightgreenE" ;
		}
		else if (self.ranking >= 50 ){
			cls = "greenE" ;
		}
		else if (self.ranking >= 30 ){
			cls = "orangeE"	;	
		}
		else {
			cls = "redE";
		}
		console.log(self.ranking);
		self.add([
		{
			margin: '10 10 0 10',
			cls: cls +  "t",
			html: "<p> " + self.ranking + "%</p>"
		},
		{
			margin: '0 10 0 10',
			cls:cls,
			height: 40,
			width: 40

		}]);
	}
});