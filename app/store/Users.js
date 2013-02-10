Ext.define('uTraveller.store.Users',{
	extend: 'Ext.data.Store',

	requires: ['uTraveller.model.User'],
	config:
	{
	model: 'uTraveller.model.User',
	data:[   {'id': 1, 'firstName':"Diepriye", 'lastName': "Pokima", 'imgSrc': "", 'aboutMe': "Computer Science Grad UofT", 
            'Sex': "Male", 'ageRange' : "20 - 25" , 'ranking' : 77, 'interest': "basketball, Hockey, Swimming Occasionally" },
            {'id': 2, 'firstName': "Mark", 'lastName': "Zakky", 'imgSrc': "", 'aboutMe': "Computer Science UofT, Worked for IBM", 
            'Sex': "Male", 'ageRange' : "20 - 25" , 'ranking' : 82, 'interest': "Soccer, Working Out" }
		] 
	}
});