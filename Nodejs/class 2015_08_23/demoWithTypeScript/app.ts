///<reference path="./typings/node/node.d.ts" />

import http = require("http");
import fs = require("fs");

var server : http.Server = http.createServer(function(req,res){

		console.log("req.method")
		console.log(req.method)

	if(req.url == "/"){		
		fs.readFile('./index.html', function (er, data) {
			if(er){
				//console.log(er);
				res.end(er.toString());
				return;
			}
			res.end(data.toString());
		})
	}
	else if(req.url == "/jquery.js"){		
		fs.readFile('./jquery.js', function (er, data) {
			//console.log(er);
			//console.log(data.toString());
			res.end(data.toString());
		})
	} else if(req.url == "/home"){

		res.write("<html>")
		res.write("<body>")
		res.write("<h1>Home</h1>")
		res.write("</body>")
		res.write("</html>")
		res.end();
	} else if(req.url == "/contact"){
		res.write("<html>")
		res.write("<body>")
		res.write("<h1 style='background:red;'>Contact</h1>")
		res.write("<input type='text' name='subject' />")
		res.write("</body>")
		res.write("</html>")
		res.end();
	} else {
		res.end("Invalid Page");
	}
	
})
server.listen(3000)


/*

import http = require("http");


http.createServer(function(req, res){
	
	res.end("Hello World");
}).listen(3000);

*/
