var MongoWrapper = require('./mongo_wrapper.js').MongoWrapper;

exports.NowHandler = (
	function( ) {
	var serv = { };
	
	serv.init = function ( server, db ) {
		var everyone = require("now").initialize(server);
		serv.everyone = everyone;

		// db handler
		var mongoWrapper = new MongoWrapper(db);

		everyone.on('connect', function ( ) {
			console.log("connected " + this.user.clientId);
		});

		everyone.on('disconnect', function ( ) {
			console.log("disconnected " + this.user.clientId);
		});




		everyone.now.messageGet = function( msgid, callback ) {
			sessions[this.user.clientId].messageGet( msgid, function( doc ) {
				callback( doc );
			});
		}



	}

	return serv;
})( );