
module.exports = function countWords(inputWords) {
	var list = { };

	inputWords.reduce( function(previousVal, currentVal) {

		if (!list.hasOwnProperty(previousVal)) {
			list[previousVal] = 1;	
		} 

		if (!list.hasOwnProperty(currentVal)) {

			list[currentVal] = 1;
		
		} else { list[currentVal] += 1; }

		return currentVal;	 
	});

	return list;
};