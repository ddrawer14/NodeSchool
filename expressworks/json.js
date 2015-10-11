
var express = require('express');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

var app = express();

app.get('/books', function(req, res) {

	fs.readFile(file, function(err, data) {
		if (err) throw err;

		// data raw buffer
		res.send(JSON.parse(data));
	})
});

app.listen(port);