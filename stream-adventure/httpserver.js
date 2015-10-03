
var http = require("http");
var through = require("through2");

var server = http.createServer( function(req, res) {
    
    if (req.method === 'POST') {
        req.pipe( through(transform) ).pipe(res);
    }
    
    function transform(buf, _, next) {
        this.push(buf.toString().toUpperCase());
        next();
    }
    
})

server.listen(process.argv[2]);