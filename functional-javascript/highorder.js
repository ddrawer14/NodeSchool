
function repeat(operation, num) {

	if (num === 0) { return };

	repeat(operation, num-=1);

	operation();

}

module.exports = repeat;

