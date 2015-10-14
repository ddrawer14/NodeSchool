
var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
var shirtSize = process.argv[2];

mongo.connect(url, function(err, db) {

  var collection = db.collection('prices');

  collection.aggregate([
    { $match: { size: shirtSize } },
    { $group: 
      {
        _id: 'avgPrice',
        avgPrice: {
          $avg: '$price'
        }
      }
    }
  ]).toArray( function(err, results) { 
    if (err) throw err;
    
    console.log( Number(results[0].avgPrice).toFixed(2) );

    db.close();
  })

})