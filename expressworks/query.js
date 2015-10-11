
var express = require('express');

var port = process.argv[2];

var app = express();

app.get('/search', function(req, res) {

	// req.query: object containing a property for each query string parameter in the route
	res.send(req.query);

});

app.listen(port);