/**

In all of these  methods both collection and callback are mandatory.   

The other parameters are optional with the declaration order being the order of precedence in resolotion.

 */
var mongodb = require('mongodb');


exports.MongoWrapper = function(db){
    this.db = db;


    // Collection 

    this.collectionGet = function(collectionName) {
        return new mongodb.Collection(this.db, collectionName);
    };

    this.dropCollection = function(collectionName, callback){
        var collection = new mongodb.Collection(this.db, collectionName);
        collection.drop(callback);
    };



    this.findOneDoc = function(query, collectionName, callback){
        if(!callback){
            callback = collectionName;
            collectionName = query;
            query = {};
        }
        // console.log( "collectionName: " + JSON.stringify(collectionName,null,4) );
        // console.log( "query: " + JSON.stringify(query,null,4) );
        var collection = new mongodb.Collection(this.db, collectionName);
        collection.findOne(query,
            function(e,d) {
                // console.log( "d: " + JSON.stringify(d,null,4) );
                // console.log( "e: " + JSON.stringify(e,null,4) );
                callback(e,d);
            });

    };


    this.findById = function(id, collectionName, callback){
        //console.log( "collectionName: " + JSON.stringify(collectionName,null,4) );
        //console.log( "id: " + JSON.stringify(id,null,4) );
        this.findOneDoc(
            {
                _id: new mongodb.ObjectID(id)}, 
            collectionName, 
            function(e,d) {
                // console.log( "d: " + JSON.stringify(d,null,4) );
                // console.log( "e: " + JSON.stringify(e,null,4) );
                callback(e,d);
            });
    };

    this.findByIds = function(ids, collectionName, callback){
        //console.log( "collectionName: " + JSON.stringify(collectionName,null,4) );
        //console.log( "id: " + JSON.stringify(ids,null,4) );
        var objectIds = [];
        for (index in ids) 
            objectIds.push(new mongodb.ObjectID(ids[index]));
        
        var collection = new mongodb.Collection(this.db, collectionName);
        collection.find({
                _id: {$in: objectIds}
            }, {}).toArray(callback);
    };


    this.findDoc = function(query, criteria, collectionName, callback){

        if(!callback && !collectionName){
            collectionName = query;
            callback = criteria;
            query = {};
            criteria = {};

        }  else if(!callback){

            callback = collectionName;
            collectionName = criteria;
            criteria = {};
        }

        var collection = new mongodb.Collection(this.db, collectionName);
        collection.find(query, criteria).toArray(callback);
    };

    this.findSort = function(query, criteria, sort, collectionName, callback){

        if(!callback && !collectionName){
            collectionName = query;
            callback = criteria;
            query = {};
            criteria = {};

        }  else if(!callback){

            callback = collectionName;
            collectionName = criteria;
            criteria = {};
        }

        var collection = new mongodb.Collection(this.db, collectionName);
        collection.find(query, criteria).sort(sort).toArray(callback);
    };


    this.insertDoc = function(doc, collectionName, callback){
        if(!callback){
            callback = collectionName;
            collectionName = doc;
            doc = {};
        }

        var collection = new mongodb.Collection(this.db, collectionName);
        collection.insert(doc, {safe:true}, callback);
    };


    this.updateDoc = function(criteria, doc, options,  collectionName, callback){

        if(!callback){
            callback = collectionName;
            collectionName = options;
            options = {};
        }

        if (criteria._id) {
            criteria._id = new mongodb.ObjectID(criteria._id);
            //delete doc._id;
            //delete doc.$$hashKey;
            //console.log(doc);
        }

/*
        if(criteria._id){

            var l = typeof criteria._id;
            if(l == "object"){
                criteria._id = new String(criteria._id);
            }
            console.log( "l: " + JSON.stringify(l,null,4) );

            criteria._id = new mongodb.ObjectID(criteria._id);
        }
*/
        console.log( "collectionName: " + JSON.stringify(collectionName,null,4) );
        console.log( "options: " + JSON.stringify(options,null,4) );
        console.log( "doc: " + JSON.stringify(doc,null,4) );
        console.log( "criteria: " + JSON.stringify(criteria,null,4) );

        var collection = new mongodb.Collection(this.db, collectionName);
        collection.update(criteria, doc, options, callback);
    };

    this.save = function(doc, options,  collectionName, callback){

        // console.log( "collectionName: " + JSON.stringify(collectionName,null,4) );
        // console.log( "doc: " + JSON.stringify(doc,null,4) );
        // console.log( "options: " + JSON.stringify(options,null,4) );

        var collection = new mongodb.Collection(this.db, collectionName);
        collection.save(doc, options, function(e,doc){
                            // console.log( "doc: " + JSON.stringify(doc,null,4) );
                            // console.log( "e: " + JSON.stringify(e,null,4) );
                            if(callback){
                                callback(e,doc);
                            }
                        });
    };


    this.findAndModify = function(query, sort, update, options, collectionName, callback){
        console.log( "-----------------------------------------------------------------------");
        console.log( "collectionName: " + JSON.stringify(collectionName,null,4) );
        console.log( "options: " + JSON.stringify(options,null,4) );
        console.log( "update: " + JSON.stringify(update,null,4) );
        console.log( "sort: " + JSON.stringify(sort,null,4) );
        console.log( "query: " + JSON.stringify(query,null,4) );
        if(!callback && !collectionName && !options && !update){

            collectionName = query;
            callback = sort;
            query = {};
            sort = {};
            update = {};
            options = {};

        }  else if(!callback && !collectionName && !options){

            collectionName = sort;
            callback = update;
            sort = {};
            update = {};
            options = {};

        }  else if(!callback && !collectionName){

            collectionName = update;
            callback = options;
            update = {};
            options = {};

        }  else if(!callback) {
            
            collectionName = options;
            callback = collectionName;
            options = {};

        }
        console.log( "collectionName: " + JSON.stringify(collectionName,null,4) );
        var collection = new mongodb.Collection(this.db, collectionName);

        console.log( "-----------------------------------------------------------------------");
        console.log( "collectionName: " + JSON.stringify(collectionName,null,4) );
        console.log( "options: " + JSON.stringify(options,null,4) );
        console.log( "update: " + JSON.stringify(update,null,4) );
        console.log( "sort: " + JSON.stringify(sort,null,4) );
        console.log( "query: " + JSON.stringify(query,null,4) );

        query =
            {
                            _id: new mongodb.ObjectID(query._id)}, 


        console.log( "query: " + JSON.stringify(query,null,4) );
        collection.findAndModify(query, sort, update, options, callback);
    };


    this.deleteDoc = function(query, sort, update, options, collectionName, callback){
        if(!callback && !collectionName && !options && !update){

            collectionName = query;
            callback = sort;
            query = {};
            sort = {};
            update = {};
            options = {};

        }  else if(!callback && !collectionName && !options){

            collectionName = sort;
            callback = update;
            sort = {};
            update = {};
            options = {};

        }  else if(!callback && !collectionName){

            collectionName = update;
            callback = options;
            update = {};
            options = {};

        }  else if(!callback) {
            
            collectionName = options;
            callback = collectionName;
            options = {};

        }
        var opts = options || options;
        opts['remove'] = true;
        var collection = new mongodb.Collection(this.db, collectionName);
        collection.findAndModify(query, sort, update, opts, callback);
    };


    this.remove = function remove(selector, options, collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.remove(selector, options, callback);
    };
    this.rename = function rename (newName, collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.rename (newName, callback);
    };
    this.distinct = function distinct(key, query, collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.distinct(key, query, callback);
    };
    this.count = function count (query, collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.count (query, callback);
    };
    this.drop = function drop(collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.drop(callback);
    };
    this.findAndRemove = function findAndRemove(query, sort, options, collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.findAndRemove(query, sort, options, callback);
    };
    this.createIndex = function createIndex (fieldOrSpec, options, collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.createIndex (fieldOrSpec, options, callback);
    };
    this.ensureIndex = function ensureIndex (fieldOrSpec, options, collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.ensureIndex (fieldOrSpec, options, callback);
    };
    this.indexInformation = function indexInformation (options, collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.indexInformation (options, callback);
    };
    this.dropIndex = function dropIndex (name, collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.dropIndex (name, callback);
    };
    this.dropIndexes = function dropIndexes (collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.dropIndexes (collectionName, callback);
    };
    this.reIndex = function reIndex(collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.reIndex(callback);
    };
    this.mapReduce = function mapReduce (map, reduce, options, collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.mapReduce (map, reduce, options, callback);
    };
    this.group = function group(keys, condition, initial, reduce, finalize, command, collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.group(keys, condition, initial, reduce, finalize, command, callback);
    };
    this.options = function options(collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.options(callback);
    };
    this.isCapped = function isCapped(collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.isCapped(callback);
    };
    this.indexExists = function indexExists(indexes, collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.indexExists(indexes, callback);
    };
    this.geoNear = function geoNear(x, y, options, collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.geoNear(x, y, options, callback);
    };
    this.geoHaystackSearch = function geoHaystackSearch(x, y, options, collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.geoHaystackSearch(x, y, options, callback);
    };
    this.indexes = function indexes(collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.indexes(collectionName, callback);
    };
    this.aggregate = function aggregate(pipeline, collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.aggregate(pipeline, callback);
    };
    this.stats = function stats(options, collectionName, callback) {
        var collection = this.collectionGet(collectionName);
        collection.stats(options, callback);
    };




    // DB 



    //Db.prototype.open = function(callback) {
    //Db.prototype.db = function(dbName) {
    //Db.prototype.close = function(forceClose, callback) {  

    this.admin = function(callback) {
        this.db.admin(callback);
    };
    this.collectionsInfo = function(collectionName, callback) {
        this.db.collectionsInfo(collectionName, callback);
    };
    this.collectionNames = function(collectionName, callback) {
        this.db.collectionNames(collectionName, callback);
    };
    this.collection = function(collectionName, options, callback) {
        this.db.collection(collectionName, options, callback);
    };
    this.collections = function(callback) {
        this.db.collections(callback);
    };
    this.eval = function(code, parameters, options, callback) {
        this.db.eval(code, parameters, options, callback);
    };
    this.dereference = function(dbRef, callback) {
        this.db.dereference(dbRef, callback);
    };
    this.logout = function(callback) {
        this.db.logout(callback);
    };
    this.authenticate = function(username, password, callback) {
        this.db.authenticate(username, password, callback);
    };
    this.addUser = function(username, password, options, callback) {
        this.db.addUser(username, password, options, callback);
    };
    this.removeUser = function(username, options, callback) {
        this.db.removeUser(username, options, callback);
    };
    this.createCollection = function(collectionName, options, callback) {
        this.db.createCollection(collectionName, options, callback);
    };
    this.command = function(selector, callback) {
        this.db.command(selector, callback);
    };
    this.dropCollection = function(collectionName, callback) {
        this.db.dropCollection(collectionName, callback);
    };
    this.renameCollection = function(fromCollection, toCollection, callback) {
        this.db.renameCollection(fromCollection, toCollection, callback);
    };
    this.lastError = function(options, connectionOptions, callback) {
        this.db.lastError(options, connectionOptions, callback);
    };
    this.previousErrors = function(options, callback) {
        this.db.previousErrors(options, callback);
    };
    this.executeDbCommand = function(command_hash, options, callback) {
        this.db.executeDbCommand(command_hash, options, callback);
    };
    this.executeDbAdminCommand = function(command_hash, options, callback) {
        this.db.executeDbAdminCommand(command_hash, options, callback);
    };
    this.resetErrorHistory = function(options, callback) {
        this.db.resetErrorHistory(options, callback);
    };
    this.createIndex = function(collectionName, fieldOrSpec, options, callback) {
        this.db.createIndex(collectionName, fieldOrSpec, options, callback);
    };
    this.ensureIndex = function(collectionName, fieldOrSpec, options, callback) {
        this.db.ensureIndex(collectionName, fieldOrSpec, options, callback);
    };
    this.cursorInfo = function(callback) {
        this.db.cursorInfo(callback);
    };
    this.dropIndex = function(collectionName, indexName, callback) {
        this.db.dropIndex(collectionName, indexName, callback);
    };
    this.reIndex = function(collectionName, callback) {
        this.db.reIndex(collectionName, callback);
    };
    this.indexInformation = function(collectionName, options, callback) {
        this.db.indexInformation(collectionName, options, callback);
    };
    /*var args = Array.prototype.slice.call(arguments, 0);
     Db.prototype.dropDatabase = function(callback) {
     Db.prototype._registerHandler = function(db_command, raw, connection, callback) {
     Db.prototype._callHandler = function(id, document, err) {
     Db.prototype._hasHandler = function(id) {
     Db.prototype._removeHandler = function(id) {
     Db.prototype._findHandler = function(id) {  
     Db.prototype._executeQueryCommand = function(db_command, options, callback) {
     Db.prototype._executeInsertCommand = function(db_command, options, callback) {  
     Db.prototype._executeUpdateCommand = Db.prototype._executeInsertCommand;
     Db.prototype._executeRemoveCommand = Db.prototype._executeInsertCommand;
     Db.prototype.wrap = function(error) {
     Db.prototype.removeAllEventListeners = function() {
     */


    
};

