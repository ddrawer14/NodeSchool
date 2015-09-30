// Write an HTTP server that serves the same text file for each request it receives.
// Your server should listen on the port provided by the first argument to your program.
// The second command-line argument will provide the location of the file to serve. You must use the fs.createReadStream() method to stream the file contents to the response.

var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];
console.log(port);
console.log(file);

var server = http.createServer( function (req, res) {
	var src = fs.createReadStream(file);
	src.pipe(res);

})

server.listen(port);


// You will need to use the fs.createReadStream() method to create a stream representing the file you are given as a command-line argument. 

// The method returns a stream object which you can use src.pipe(dst) to pipe the data from the src stream to the dst stream. In this way you can connect a filesystem stream with an HTTP response stream.
