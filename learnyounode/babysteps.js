
// console.log(process.argv);

length = process.argv.length;
var i = 0;
var sum = 0;

for (i = 2; i < length; i++) {
	sum += Number(process.argv[i]);
}

console.log(sum);