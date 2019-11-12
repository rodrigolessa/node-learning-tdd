var http = require('http'); //How we require modules

http.createServer(function(request, response) {

	response.writeHead(200); //Status code in header
	response.write("Hello is running."); //Response body
	setTimeout(function(){ //Represent long running process
		response.write("Holle is done.");
		response.end(); //Close the connection
	}, 5000); //5000ms = 5seconds

}).listen(8080); //Listen for connections on this port

console.log('Listening on port 8080...');