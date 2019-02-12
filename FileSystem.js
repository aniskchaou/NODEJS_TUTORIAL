var http = require('http');

//The Node.js file system module allows you to work with 
//the file system on your computer.
var fs = require('fs');


http.createServer(function (req, res) {
  //readFile() : method is used to read files on your computer.
  fs.readFile('index.html', function(err, data) {
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    

    res.write(data);
   
    res.end();
  
  });

}).listen(8080);