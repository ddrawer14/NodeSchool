
// Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. 
// Expect the request to contain a query string with a key 'iso' and a value ISO-format time 

//  /api/parsetime?iso=2013-08-10T12:10:15.474Z

// The JSON response should contain only 'hour', 'minute' and 'second' properties. 
// https://nodejs.org/docs/latest/api/url.html
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

var http = require("http");
var port = process.argv[2];
var url = require("url");


var server = http.createServer( function( req, res ) {
  
  var data = url.parse(req.url, true);
  
  var date = new Date(data.query.iso);
  
  var time = ""; 
  
  if (data.pathname === '/api/parsetime') {
    time = {
      "hour" : date.getHours(),
      "minute" : date.getMinutes(),
      "second" : date.getSeconds(),
    };
  } else if (data.pathname === '/api/unixtime') {
    time = {
      "unixtime" : date.getTime(),
    };
  }
  
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  res.end(JSON.stringify(time));
  
})

server.listen(port);
