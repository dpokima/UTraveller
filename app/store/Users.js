Ext.define('uTraveller.store.Users',{
	extend: 'Ext.data.Store',

	requires: ['uTraveller.model.User'],
	config:
	{
	model: 'uTraveller.model.User',
	data:[   {'id': 1, 'firstName':"Diepriye", 'lastName': "Pokima", 'imgSrc': "resources/image/Kobe.jpg", 'aboutMe': "Computer Science Grad UofT", 
            'Sex': "Male", 'ageRange' : "20 - 25" , 'Ranking' : 77, 'Interest': "basketball, Hockey, Swimming Occasionally" },
            {'id': 2, 'firstName': "Mark", 'lastName': "Zakky", 'imgSrc': "resources/image/Mark.jpg", 'aboutMe': "Computer Science UofT, Worked for IBM", 
            'Sex': "Male", 'ageRange' : "20 - 25" , 'Ranking' : 82, 'Interest': "Soccer, Working Out" }
		] 
	}
});