Ext.define('uTraveller.view.Settings.contactInfo',{
	extend:'Ext.Container',
	xtype: 'contactInfo',

	requires:[
	'Ext.form.FieldSet',
	'Ext.field.Email'
	],

	config:{
		scrollable: true,
		cls: "contactus",
		items: [
			{
				html:[
						'<section id="contact">',
						'<h1>Contact Info</h1>',
						'<p>Please call or contact us through the following email or phone number</p>',
						'<table id="newspaper-a">',
							'<thead>',
								'<tr>',
									'<th>Name</th>',
									'<th>e-mail</th>',
									'<th>Phone Number</th>',
								'<tr>',
							'</thead>',
							'<tbody>',
								'<tr class="odd">',
									'<td>Mark Zaky</td>',
									'<td>a@email.com</td>',
									'<td>123-123-1234</td>',
								'</tr>',
								'<tr>',
									'<td>Diepriye Pokima</td>',
									'<td>b@email.com</td>',
									'<td>123-123-1234</td>',
								'</tr>',
							'</tbody>',
						'</table>',
					'</section>',
				].join("")
			},
			{
				xtype: "fieldset",
				title: "Contact Us",
				instructions:"Email is optional.",
				id: "contactForm",

				items: [
					{
						xtype: "textfield",
						label: "Name",
						name: "name"
					},
					{
						xtype: "emailfield",
						label: "Email",
						name: "email"
					},
					{
						xtype: "textareafield",
						label: "Message",
						name: "message"
					}
				]
			},
			{
				xtype:'button',
				ul: 'confirm',
				text: 'Send',
				action: 'submitContactForm'
			}
		]
	}

});