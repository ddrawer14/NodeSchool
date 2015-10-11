
var express = require('express');
var bodyparser = require('body-parser');

var port = process.argv[2];

var app = express();

// URL-encoded parser as a top-level middleware, which will parse the bodies of all incoming requests
app.use(bodyparser.urlencoded({ extended: false }));

app.post('/form', function(req, res) {

	res.end(req.body.str.split('').reverse().join(''));

});

app.listen(port);