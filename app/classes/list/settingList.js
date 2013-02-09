Ext.define('uTraveller.classes.list.settingList',{
	extend: "Ext.Container",
	xtype: "Settinglist",
	cont: "",
	config: {
		height: "40px",
		style: "background-color:grey;",
		cls: "settingList",
		border: 1

	},

	initialize: function () {
		var self = this;
		this.element.on('tap', function () {
		    console.log('settingtap');
		    self.fireEvent('settingtap', self.cont);
		});
		console.log(this.cont);
		this.setHtml(this.cont);
	}
});