var MongoWrapper = require('./mongo_wrapper.js').MongoWrapper;



exports.NowMongo = (
    function()
    {
        var nm = {};

        nm.init = function(db, everyone){

            var mongoWrapper = new MongoWrapper(db);

            everyone.now.findret = function(query, criteria, collectionName){

                if(!mongoWrapper){
                    throw Error("mongoWrapper not intiliazed.  Please call NowMongo.init(db).");
                }

                var c = mongoWrapper.findReturnCursor(query, criteria, collectionName);
                return c;

            };

            everyone.now.findone = function(query, collectionName, callback){

                if(!mongoWrapper){
                    throw Error("mongoWrapper not intiliazed.  Please call NowMongo.init(db).");
                }

                mongoWrapper.findOneDoc(query, collectionName, callback);
            };

            everyone.now.findById = function (id, collectionName, callback) {

                if(!mongoWrapper){
                    throw Error("mongoWrapper not intiliazed.  Please call NowMongo.init(db).");
                }

                mongoWrapper.findById(id, collectionName, callback);
            };

            everyone.now.findByIds = function (ids, collectionName, callback) {

                if(!mongoWrapper){
                    throw Error("mongoWrapper not intiliazed.  Please call NowMongo.init(db).");
                }

                mongoWrapper.findByIds(ids, collectionName, callback);
            };


            everyone.now.find = function(query, criteria, collectionName, callback){

                if(!mongoWrapper){
                    throw Error("mongoWrapper not intiliazed.  Please call NowMongo.init(db).");
                }

                mongoWrapper.findDoc(query, criteria, collectionName, callback);

            };

            everyone.now.insert = function(doc, collectionName, callback){
                if(!mongoWrapper){
                    throw Error("mongoWrapper not intiliazed.  Please call NowMongo.init(db).");
                }

                mongoWrapper.insertDoc(doc, collectionName, callback);

            };

            everyone.now.update = function(criteria, doc, options, collectionName, callback){
                if(!mongoWrapper){
                    throw Error("mongoWrapper not intiliazed.  Please call NowMongo.init(db).");
                }
                console.log(arguments)
                mongoWrapper.updateDoc(criteria, doc, options, collectionName, callback);
            };

            everyone.now.save = function(doc, options, collectionName, callback){
                if(!mongoWrapper){
                    throw Error("mongoWrapper not intiliazed.  Please call NowMongo.init(db).");
                }

                mongoWrapper.save(doc, options, collectionName, callback);

            };

            everyone.now.findAndModify = function(query, sort, update, options, collectionName, callback){
                if(!mongoWrapper){
                    throw Error("mongoWrapper not intiliazed.  Please call NowMongo.init(db).");
                }

                mongoWrapper.findAndModify(query, sort, update, options, collectionName, callback);

            };

            everyone.now.deleteDoc = function(query, sort, update, options, collectionName, callback){
                if(!mongoWrapper){
                    throw Error("mongoWrapper not intiliazed.  Please call NowMongo.init(db).");
                }

                mongoWrapper.deleteDoc(query, sort, update, options, collectionName, callback);
            };

            everyone.now.remove = function(selector, options, collectionName, callback) {
                mongoWrapper.remove(selector, options, collectionName, callback);
            };
            everyone.now.rename = function (newName, collectionName, callback) {
                mongoWrapper.rename (newName, collectionName, callback);
            };
            everyone.now.distinct = function(key, query, collectionName, callback) {
                mongoWrapper.distinct(key, query, collectionName, callback);
            };
            everyone.now.count = function (query, collectionName, callback) {
                mongoWrapper.count (query, collectionName, callback);
            };
            everyone.now.drop = function(collectionName, callback) {
                mongoWrapper.drop(collectionName, callback);
            };
            everyone.now.findAndRemove = function(query, sort, options, collectionName, callback) {
                mongoWrapper.findAndRemove(query, sort, options, collectionName, callback);
            };
            everyone.now.createIndex = function (fieldOrSpec, options, collectionName, callback) {
                mongoWrapper.createIndex (fieldOrSpec, options, collectionName, callback);
            };
            everyone.now.ensureIndex = function (fieldOrSpec, options, collectionName, callback) {
                mongoWrapper.ensureIndex (fieldOrSpec, options, collectionName, callback);
            };
            everyone.now.indexInformation = function (options, collectionName, callback) {
                mongoWrapper.indexInformation (options, collectionName, callback);
            };
            everyone.now.dropIndex = function (name, collectionName, callback) {
                mongoWrapper.dropIndex (name, collectionName, callback);
            };
            everyone.now.dropIndexes = function (collectionName, callback) {
                mongoWrapper.dropIndexes (collectionName, callback);
            };
            everyone.now.reIndex = function(collectionName, callback) {
                mongoWrapper.reIndex(collectionName, callback);
            };
            everyone.now.mapReduce = function (map, reduce, options, collectionName, callback) {
                mongoWrapper.mapReduce (map, reduce, options, collectionName, callback);
            };
            everyone.now.group = function(keys, condition, initial, reduce, finalize, command, collectionName, callback) {
                mongoWrapper.group(keys, condition, initial, reduce, finalize, command, collectionName, callback);
            };
            everyone.now.options = function(collectionName, callback) {
                mongoWrapper.options(collectionName, callback);
            };
            everyone.now.isCapped = function(collectionName, callback) {
                mongoWrapper.isCapped(collectionName, callback);
            };
            everyone.now.indexExists = function(indexes, collectionName, callback) {
                mongoWrapper.indexExists(indexes, collectionName, callback);
            };
            everyone.now.geoNear = function(x, y, options, collectionName, callback) {
                mongoWrapper.geoNear(x, y, options, collectionName, callback);
            };
            everyone.now.geoHaystackSearch = function(x, y, options, collectionName, callback) {
                mongoWrapper.geoHaystackSearch(x, y, options, collectionName, callback);
            };
            everyone.now.indexes = function(collectionName, callback) {
                mongoWrapper.indexes(collectionName, callback);
            };
            everyone.now.aggregate = function(pipeline, collectionName, callback) {
                mongoWrapper.aggregate(pipeline, collectionName, callback);
            };
            everyone.now.stats = function(options, collectionName, callback) {
                mongoWrapper.stats(options, collectionName, callback);
            };



            // DB methods

            everyone.now.admin = function(callback) {
                mongoWrapper.db.admin(callback);
            };
            everyone.now.collectionsInfo = function(collectionName, callback) {
                mongoWrapper.db.collectionsInfo(collectionName, callback);
            };
            everyone.now.collectionNames = function(collectionName, callback) {
                mongoWrapper.db.collectionNames(collectionName, callback);
            };
            everyone.now.collection = function(collectionName, options, callback) {
                mongoWrapper.db.collection(collectionName, options, callback);
            };
            everyone.now.collections = function(callback) {
                mongoWrapper.db.collections(callback);
            };
            everyone.now.eval = function(code, parameters, options, callback) {
                mongoWrapper.db.eval(code, parameters, options, callback);
            };
            everyone.now.dereference = function(dbRef, callback) {
                mongoWrapper.db.dereference(dbRef, callback);
            };
            everyone.now.logout = function(callback) {
                mongoWrapper.db.logout(callback);
            };
            everyone.now.authenticate = function(username, password, callback) {
                mongoWrapper.db.authenticate(username, password, callback);
            };
            everyone.now.addUser = function(username, password, options, callback) {
                mongoWrapper.db.addUser(username, password, options, callback);
            };
            everyone.now.removeUser = function(username, options, callback) {
                mongoWrapper.db.removeUser(username, options, callback);
            };
            everyone.now.createCollection = function(collectionName, options, callback) {
                mongoWrapper.db.createCollection(collectionName, options, callback);
            };
            everyone.now.command = function(selector, callback) {
                mongoWrapper.db.command(selector, callback);
            };
            everyone.now.dropCollection = function(collectionName, callback) {
                mongoWrapper.db.dropCollection(collectionName, callback);
            };
            everyone.now.renameCollection = function(fromCollection, toCollection, callback) {
                mongoWrapper.db.renameCollection(fromCollection, toCollection, callback);
            };
            everyone.now.lastError = function(options, connectionOptions, callback) {
                mongoWrapper.db.lastError(options, connectionOptions, callback);
            };
            everyone.now.previousErrors = function(options, callback) {
                mongoWrapper.db.previousErrors(options, callback);
            };
            everyone.now.executeDbCommand = function(command_hash, options, callback) {
                mongoWrapper.db.executeDbCommand(command_hash, options, callback);
            };
            everyone.now.executeDbAdminCommand = function(command_hash, options, callback) {
                mongoWrapper.db.executeDbAdminCommand(command_hash, options, callback);
            };
            everyone.now.resetErrorHistory = function(options, callback) {
                mongoWrapper.db.resetErrorHistory(options, callback);
            };
            everyone.now.createIndex = function(collectionName, fieldOrSpec, options, callback) {
                mongoWrapper.db.createIndex(collectionName, fieldOrSpec, options, callback);
            };
            everyone.now.ensureIndex = function(collectionName, fieldOrSpec, options, callback) {
                mongoWrapper.db.ensureIndex(collectionName, fieldOrSpec, options, callback);
            };
            everyone.now.cursorInfo = function(callback) {
                mongoWrapper.db.cursorInfo(callback);
            };
            everyone.now.dropIndex = function(collectionName, indexName, callback) {
                mongoWrapper.db.dropIndex(collectionName, indexName, callback);
            };
            everyone.now.reIndex = function(collectionName, callback) {
                mongoWrapper.db.reIndex(collectionName, callback);
            };
            everyone.now.indexInformation = function(collectionName, options, callback) {
                mongoWrapper.db.indexInformation(collectionName, options, callback);
            };
            

        };

        return nm;
        
    })();