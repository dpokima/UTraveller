Ext.define('uTraveller.store.Users',{
	extend: 'Ext.data.Store',

	requires: ['uTraveller.model.User'],
	config:
	{
	model: 'uTraveller.model.User',
	data:[   {'id': 1, 'firstName':"Diepriye", 'lastName': "Pokima", 'imgSrc': "resources/image/Kobe.jpg", 'aboutMe': "Computer Science Grad UofT", 
<<<<<<< HEAD
            'Sex': "Male", 'ageRange' : "20 - 25" , 'ranking' : 77, 'interest': "basketball, Hockey, Swimming Occasionally" },
            {'id': 2, 'firstName': "Mark", 'lastName': "Zaky", 'imgSrc': "resources/image/Mark.jpg", 'aboutMe': "Computer Science UofT, Worked for IBM", 
            'Sex': "Male", 'ageRange' : "20 - 25" , 'ranking' : 82, 'interest': "Soccer, Working Out" }
=======
            'Sex': "Male", 'ageRange' : "20 - 25" , 'Ranking' : 77, 'Interest': "basketball, Hockey, Swimming Occasionally" },
            {'id': 2, 'firstName': "Mark", 'lastName': "Zakky", 'imgSrc': "", 'aboutMe': "Computer Science UofT, Worked for IBM", 
            'Sex': "Male", 'ageRange' : "20 - 25" , 'Ranking' : 82, 'Interest': "Soccer, Working Out" }
>>>>>>> 1ff2cd1686535eeaacf626788182fdfc4b047d3f
		] 
	}
});