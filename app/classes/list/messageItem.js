Ext.define('uTraveller.classes.list.messageItem',{
	extend:'Ext.carousel.Carousel',
	requires:['Ext.Img'],
	xtype:'messageitem',
	user : null,
	config: {
		height: "46px"
	},
	initialize : function(){
		var self = this;
		console.log(self.user);
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
							right: 5,
							html:"<p>test " + self.user.get("Ranking") + "%</p>"
						}
						]

			}
		]);
	}
});