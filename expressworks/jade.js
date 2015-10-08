 var path = require("path");
 var express = require("express");
 
 var port = process.argv[2];
 var jadeFile = process.argv[3];
 
 var app = express();
 
 // Path to template files located under the templates folder
 app.set('views', path.join(__dirname, 'templates'));
 
 // Tell Express app what template engine to use
 app.set('view engine', 'jade');
 
 app.get('/home', function(req, res) {
 
  // Render() takes template name and data (called locals)
  res.render(jadeFile, { date: new Date().toDateString() });
 
});

app.listen(port);