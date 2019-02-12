//Every action on a computer is an event. 
//Like when a connection is made or a file is opened.

var fs = require('fs');
var rs = fs.createReadStream('index.html');

rs.on('open', function () {
  console.log('The file is open');
});

