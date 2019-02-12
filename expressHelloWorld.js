//Express is a minimal and flexible Node.js web application framework that
// provides a robust set of features to develop web and mobile applications.


//You should install the following important modules along with express −
//body-parser : This is a node.js middleware for handling JSON, Raw, Text 
//and URL encoded form data.
//cookie-parser : Parse Cookie header and populate req.cookies with 
//an object keyed by the cookie names.
//multer : This is a node.js middleware for handling multipart/form-data.


var express = require('express');
var app = express();

app.get('/', function (req, res) {
   console.log(req);
   console.log(res);
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})