
var through = require("through2");
var split = require("split");

var count = 1;

process.stdin
    .pipe(split())
    .pipe(through( function(line, _, next) { 
       // console.log(count);
        if (count%2 == 0) {
            this.push(line.toString().toUpperCase() + '\n');
        } else {
            this.push(line.toString().toLowerCase() + "\n");
        }
        
        count += 1;
        next();
    })).pipe(process.stdout);
