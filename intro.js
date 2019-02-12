//We use the require directive to load the http module and store
// the returned HTTP instance into an http variable

var http = require('http');
 
//http.createServer() : method to create a server instance  
//function with parameters request and response. 


var server=http.createServer(function (req, res) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
  res.writeHead(200, {'Content-Type': 'text/html'});
  

  res.write(req.url);
  //Write the sample implementation to always  return "Hello World".
  res.end('Hello World!');

});
//listen() : bind http instance at port 8080 
server.listen(8080);

console.log('Server running at http://127.0.0.1:8080/');