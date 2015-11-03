
module.exports = (...args) => {
    
    var count = 0;
    args.forEach( value => count += value)
    
    return count/args.length;
};