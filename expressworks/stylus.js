
var express = require('express');
var stylus = require('stylus');

var port = process.argv[2];
var dir = process.argv[3];

app = express();

// Source dir used to find .styl files
 // Destination dir to output .css files defaults to src when undefined.
app.use(stylus.middleware(dir));
  
// Directory to serve static assets  
app.use(express.static(dir));

app.listen(port);