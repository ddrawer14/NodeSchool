
// Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & 24 hour time in the format: "YYYY-MM-DD hh:mm" followed by a newline character. 
 // Month, day, hour and minute must be zero-filled to 2 integers. For example: "2013-07-06 17:42"

var net = require("net");

var server = net.createServer(function (socket) {
       
    var dateNow = new Date();
        
    var year = dateNow.getFullYear();
    var month = dateNow.getMonth();
    var day = dateNow.getDate();
    var hour = dateNow.getHours();
    var minute = dateNow.getMinutes();
    
    socket.write(year + "-" + month + "-" + day + " " + hour + ":" + minute + "\n");
    
    socket.end();
    
})

server.listen(process.argv[2]);



