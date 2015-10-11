
module.exports = function getShortMessages(messages) {
// Using function declarations

	// fifty: filter callback, val: element arg
	function fifty(val) {

		if (val.message.length < 50) { return true; }
	};

	// arr: map callback function, val: currentValue arg
	function arr(val) {
		return val.message;
	};

	// Invoke filter and map functions. Pass callbacks w/out specifying arguments
	return messages.filter(fifty).map(arr);

}; 
	// Using funciton expressions (anonymous callback functions)
    // module.exports = function getShortMessages(messages) {
    //   return messages.filter(function(item) {
    //     return item.message.length < 50
    //   }).map(function(item) {
    //     return item.message
    //   })
    // }
