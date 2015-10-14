
var mongo = require('mongodb').MongoClient;

var database = process.argv[2];
var url = 'mongodb://localhost:27017/' + database;

var coll = process.argv[3];
var id = process.argv[4];

mongo.connect(url, function(err, db){
	if (err) throw err;

	var collection = db.collection(coll);

	collection.remove(
		{ _id: id }
	)

	db.close();
})