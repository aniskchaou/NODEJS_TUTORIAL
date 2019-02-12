//Express provides a built-in middleware express.static to serve static files, 
//such as images, CSS, JavaScript, etc.

//You simply need to pass the name of the directory where you keep your static assets,
// to the express.static middleware to start serving the files directly. 

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})