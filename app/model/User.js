Ext.define('uTraveller.model.User', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'firstName', type: 'auto'},
            {name: 'lastName', type: 'auto'},
            {name: 'imgSrc', type: 'auto'},
            {name: 'aboutMe', type: 'auto'},
            {name: 'Sex', type: 'auto'},
            {name: 'ageRange', type: 'auto'},
            {name: 'Ranking', type: 'int'},
            {name: 'Interest', type: 'auto'}
        ]
    }
});