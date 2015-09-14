
//Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the String contents of each "data" event from the response to a new line on the console (stdout).

var http = require("http");
var url = process.argv[2];

// http.get( options[, callback] )
 // Very similar to http.request()
 // options can be an object or a string. If options is a string, it is automatically parsed with url.parse().
 // the optional callback parameter will be added as a one time listener for the 'response' event
 // returns an instance of the http.ClientRequest class. The ClientRequest instance is a writable stream

// Class: http.ClientRequest
 // this object is created internally and returned from http.request().
 // to get the response, add a listener for 'response' to the request object ( http.get() ). 
  // 'response' will be produced from the request object when the response headers have been received. 
  // the 'response' event is executed with one argument which is an instance of http.IncomingMessage.

// Event: 'response'  
 // function (response) { };
 // Emitted when a response is received to this request. This event is emitted only once. The response argument will be an instance of http.IncomingMessage
 // During the 'response' event, one can add listeners to the response object; particularly to listen for the 'data' event
 
// http.IncomingMessage
 // An IncomingMessage object is created by http.Server or http.ClientRequest 
 // passed as the first argument to the 'request' and 'response' event respectively. 
 // It may be used to access response status, headers and data.
 
http.get(url, function(res) {
// response (res) object is a Node Stream object. You can treat Node Streams as objects that emit events. 
// The three events that are of most interest are: "data", "error" and "end". 

    res.on("data", function(data) { 
    // The "data" event is emitted when a chunk of data is available and can be processed. 
    
        console.log(data.toString());
    });
    
})

