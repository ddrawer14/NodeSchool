
// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).
// The first line you write should just be an integer representing the number of characters received from the server. 
// The second line should contain the complete String of characters sent by the server.

var http = require("http");
var url = process.argv[2];
const bl = require("bl");
// Use a third-party package to abstract the difficulties involved in collecting an entire stream of data.
// Buffer List: collect buffers and access with a standard readable Buffer interface, streamable too!

http.get(url, function(res) { 
  // When you use the callback method like this, the resulting data parameter is a concatenation of all Buffer objects in the list.     
  res.pipe(bl(function(err, data) {
      if (err) return console.err(err);
      
      console.log(data.length);
      console.log(data.toString());
  }))
})

//bl can have a stream piped in to them and they will collect the data for you. 
 //Once the stream has ended, a callback will be fired with the data:
 // response.pipe(bl(function (err, data) { /* ... */ }))
 // will probably need to data.toString() to convert from a Buffer.