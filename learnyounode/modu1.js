
// The module must export a single function that takes three arguments: the directory name, the filename extension string and a callback function, in that order.
// Contains the directory reading and filtering function.
var fs = require('fs');
var path = require('path');

//To define a single function export, you assign your function to the module.exports object.
module.exports = function (dirname, ext, callback) { 

	//fs.readdir(path, callback) 
	 //callback gets two arguments (err, files). files is an array of the names of the files in the directory.

	fs.readdir(dirname, function(err, files) {
	// callback function must be called using the idiomatic node(err, data) convention.	

		// If you receive an error from your call to  fs.readdir(), the callback must be called with the error, and only the error, as the first argument.	
		if (err) return callback(err);  // it is idiomatic to check for errors and do early-returns within callback functions.

		// arr.filter(callback[, thisArg])
		 // filter() method creates a new array with all elements that pass the test implemented by the provided function.

		var list = files.filter( function(file) {
		//callback: Function to test each element of the array. Invoked with arguments (element, index, array). Return true to keep the element, false otherwise.

			return path.extname(file) === '.' + ext;
		})

		// unless there's an error, the first argument passed to the callback will be null, and the second will be your data.
		callback(null, list);
	})

}

  