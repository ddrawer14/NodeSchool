// This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). 
// However, this time you will be provided with three URLs as the first three command-line arguments.

// You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). 

// Print the data as a String; one line per URL. 
 // The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

// Don't expect these three servers to play nicely! They are not going to give you complete responses in the order you hope, so you can't naively just print the output as you get it because they will be out of order.

// You will need to queue the results and keep track of how many of the URLs have returned their entire contents. Only once you have them all, you can print the data to the console.

var http = require("http");
var info = [ ];
var count = 0;

function printResult() {
     //console.log(info[0]);
    for (var i = 0; i < 3; i++) {
        console.log(info[i]); 
    }
}

function getInfo(index) {

    http.get(process.argv[2 + index], function(res) {
        var message = "";
        
        res.on('data', function(data) {
            
            message += data;
            info[index] = message.toString();
        });
        
        res.on('end', function() {
            count += 1;
             if (count == 3) { printResult(); }
        });
 
    })    

}

for (var i = 0; i < 3; i++) {
    getInfo(i);
}
