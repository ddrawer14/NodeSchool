
function foo() {
	var bar;
	quux = 5;

	function zip() {
		var quux; 
		bar = true;
	}

	return zip;
}
