
var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
	if (err) throw err;

	var collection = db.collection('users');

	collection.update(
		{ username: 'tinatime' }, 
		{
			$set: { age: 40 }
		}
	)

	db.close();
});