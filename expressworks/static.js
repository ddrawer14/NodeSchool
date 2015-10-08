var path = require("path");
var express = require("express");

var port = process.argv[2];
var file = process.argv[3];

var app = express();

app.use(express.static(file || path.join(__dirname, 'public')));

app.listen(port);