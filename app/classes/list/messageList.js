Ext.define('uTraveller.classes.list.messageList',{
	extend:'Ext.carousel.Carousel',
	xtype:'messagelist',
	user: null,
	config: {
		height: "40px",
		items:[
		{
			style: "background-color:gray;",
			html: "Diepriye" 
		},
		{
			html: "I like Basketball"
		}
		]
	}
});