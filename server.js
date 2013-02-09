
var express = require('express');
var app = express( );
var port = process.env.PORT || 3000;
var repl = require("repl").start("uTraveller --: ");



var mongodb = require('mongodb');
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var db = new Db('traveller', new Server('127.0.0.1', 27017, {auto_reconnect: true}));
var dbClient = null;
var MongoWrapper = require("./custom_modules/mongo_wrapper.js").MongoWrapper;
var mongoWrapper = null;

var io = null;



// Server Configuration
app.configure(
    function( )
    {

        //app.use('/', testMw, express.static(__dirname + '/public')); 

        app.use(express.logger());
        app.use(express.cookieParser());
        app.use(express.bodyParser()); // allows you to grab json objects 
        app.use(express.methodOverride());
        app.use(express.session({ secret: 'keyboard cat' }));
        app.use(app.router);
        app.use('/', express.static(__dirname + '/')); 

    });

app.configure(
    'development', 
    function(){
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

app.configure(
    'production', 
    function(){
        app.use(express.errorHandler());
    });

app.get("/",function(req,res) {
  res.sendfile("index.html");
});









// open mongo and start express listening for connections
db.open(
    function(err, db) 
    {
        if(err){
            //handleError(err);
            console.log("Error connecting to the database");
            return;
        }
        dbClient = db;

        server = app.listen(port, function() {
                                console.log("Express server listening on port %d in %s mode", port, app.settings.env);
                            });
               io = require('socket.io').listen(server);
                                io.sockets.on('connection', function (socket) {
                                  socket.emit('news', { hello: 'world' });
                                  socket.on('my other event', function (data) {
                                    console.log(data);
                                  });
                                });


    });

