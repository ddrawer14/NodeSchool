
// Returns copy of a portion of an array into new array object. 1st param: index at which to begin.
var inputs = process.argv.slice(2);

// Creates new array with results of calling provided functino on every element
var result = inputs.map( incoming => incoming.substr(0, 1) )
  // Map all incoming strings to their first character
  
.reduce( (previous, current) =>  previous + current)
  // If no initialValue provided, previousValue: first value in array and currentValue: second value
  
console.log(`[${inputs}] becomes \"${result}\"`);