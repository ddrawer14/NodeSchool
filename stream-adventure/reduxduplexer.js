
var duplex = require('duplexer2');
var through = require('through2');

// counter is a readable stream
module.exports = function(counter) {

	// create counts objectto track # of occurrences of each unique country code
	var counts = {};

	// create new through2 instance with write (transform) and end functions
	var input = through(write, end);

	// Write: trasnform function with row buffer object and next callback
	function write (row, _, next) {
		// Create country code property and/or increment counter value
		counts[row.country] = (counts[row.country] || 0) + 1;
		next();
	}

	function end (done) {

		counter.setCounts(counts);
		done();
	}

	// Return writable (through) and readable (input) stream
	return duplex(input, counter);

};