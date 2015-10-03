
var through = require("through2");
var trumpet = require("trumpet");

// Create new instance of trumpet stream (readable and writeable)
var tr = trumpet();

// return first element matching the selector
var loud = tr.select('.loud').createStream();
 // creates new readable/writable stream that outputs content of element and replaces it with data written to it.

// Pipe contents to  a transform function 
loud.pipe( through( function(buf, _, next) {
    // Transform contents 
    this.push(buf.toString().toUpperCase());

    next();
})).pipe(loud);
// Overwrite contents of element with the result of transform function

process.stdin.pipe(tr).pipe(process.stdout);