
var fs = require('fs');

var filePath = process.argv[2];

var fileContents = fs.readFileSync(filePath);

var str = fileContents.toString();

var strSplit = str.split('\n');

console.log(strSplit.length - 1);