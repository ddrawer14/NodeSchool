// You now have the module.exports object in your module assigned to the filter variable. 
var filter = require('./modu1');
var dirname = process.argv[2];
var ext = process.argv[3];

// Since you are exporting a single function, filter is a function you can call!
filter(dirname, ext, function(err, list) {
	if (err) return err;

	list.forEach(function(file) { 
		console.log(file);
	})

})

