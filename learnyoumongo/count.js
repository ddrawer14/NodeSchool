
var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
var ageNum = process.argv[2];

mongo.connect(url, function(err, db){
	if (err) throw err;

	var collection = db.collection('parrots');

	collection.count({
		age: {
			$gt: +ageNum
		}
	}, function(err, count) {
	
		console.log(count);
		db.close();
	})
});