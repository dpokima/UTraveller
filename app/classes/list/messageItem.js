Ext.define('uTraveller.classes.list.messageItem',{
	extend:'Ext.carousel.Carousel',
	requires:['Ext.Img', 'uTraveller.classes.tool.rankingEmo'],
	xtype:'messageitem',
	user : null,
	config:{
		height: "48px",
		border: 1,
		cls: "messageitem"
	},


	initialize : function(){
		var self = this;
		console.log(self.user);
		// Needed cause taphold triggers tap
		// To stop tap, reference to handler
		// is required.
		self.taphandler = function(){
			self.fireEvent('messagetap', self.id, self.user.get("firstName") + " " + self.user.get("lastName"), self.user);
		}
		self.add(
			[
			{
				style: "background-color:gray;",
				layout: 'hbox',
				defaults:{
					margin: '3 10 0 10',
				}, 
				items:[
						{
							xtype:'image',
							src: self.user.get("imgSrc") ,
							height:40,
							width: 45,
						},
						{
							html: self.user.get("firstName") + " " + self.user.get("lastName"),
							margin: '12 10 0 10',
						},
				]
			},
			{
				style: "background-color:gray;",
				layout: 'hbox',
				items:[{
							height: 40,
							width: '100%',
							layout: "vbox",
							margin: '3 10 0 10',
							items: [
							{
								html: "<p>Age Range : " + self.user.get("ageRange") + "</p>"
							},
							{
								html: "<p>Sex : " + self.user.get("Sex") + "</p>"
							}]

						},
						{
							xtype: 'rankingemo',
							ranking : self.user.get("Ranking"),
							right: 5,
							
						}
						]

			}
		]);

		self.element.on({
			//special Case
			tap: self.taphandler,
		    taphold: function(){
		    	console.log("stop holding me");
		    	self.element.un('tap', self.taphandler);
		    	Ext.Function.defer(function(){
		    		self.element.on('tap', self.taphandler);
		    	}, 1000);
		    	self.fireEvent('messagehold', self.user);
		    }
		});	
	},
});