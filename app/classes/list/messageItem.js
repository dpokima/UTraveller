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
			html: "I like Basketball"
		}
		]
			);
	}
});