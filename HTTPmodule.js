var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  
  //Add an HTTP Header
  //res.writeHead() method is the status code, 
  //200 means that all is OK, 
  //the second argument is an object containing the response headers	
  res.writeHead(200, {'Content-Type': 'text/html'});
  

  //Read the Query String
  //The object req has a property called "url" which holds 
  //the part of the url that comes after the domain name
  res.write(req.url);

  //Split the Query String
  //There are built-in modules to easily split the query 
  //string into readable parts, such as the URL module.
  var q = url.parse(req.url, true).query;
  
  var txt = q.year + " " + q.month;
  
  res.end(txt);
}).listen(8080);