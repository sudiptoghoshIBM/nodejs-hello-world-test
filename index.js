var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World! from SG NODEJS App on Friday 18th");

});

var port = 8080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
