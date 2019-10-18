var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World! from SG Demo App in Dallas Server");

});

var port = 8080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
