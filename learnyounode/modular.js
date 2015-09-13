
// You now have the module.exports object in your module assigned to the filter variable. 
var filter = require('./modu1');
var dirname = process.argv[2];
var ext = process.argv[3];

// Since you are exporting a single function, filter is a function you can call!
filter(dirname, ext, function(err, list) {
	if (err) return err;

	// arr.forEach(callback[, thisArg])
	 // forEach() method executes a provided callback function once per array element	 
	
	list.forEach( function(file) { 
	// callback: Function to execute for each element, taking three arguments: (currentValue, index, array)

		console.log(file);
	})

})

