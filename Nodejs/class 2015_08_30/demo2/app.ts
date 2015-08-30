///<reference path="./typings/node/node.d.ts" />

import http = require("http");
import fs = require("fs");

import url = require("url");
import qs = require("querystring");

var tasks = [];

var server : http.Server = http.createServer(function(req,res){

		//console.log("req.method")
		//console.log(req.method)
	
	console.log("req.url");
	console.log(req.url);
	
	var currentUrl = url.parse(req.url);
	console.log(currentUrl.query);
	
	var myObj = qs.parse(currentUrl.query)
	
	if(myObj.action == "add"){
		tasks.push(myObj.task)
	} else if(myObj.action == "delete"){
		tasks.splice(myObj.index, 1);
	}
	
	fs.readFile('./template.html', function (er, data) {
			if(er){
				//console.log(er);
				res.end(er.toString());
				return;
			}
			
			
			var temp = data.toString();
			//console.log(temp)
			
			var html = "<table>";
			for(var i = 0; i < tasks.length; i++){
				html += "<tr>";
				html += "<td>" + tasks[i] +  "</td>";
				html += "<td><a href='?action=delete&index=" + i +  "' >Delete</a></td>";
				html += "</tr>";
			}
			html += "</table>";
			
			temp = temp.replace("Template", html);
			
			res.end(temp);
		})
	
	/*
	fs.readFile('./template.html', function (er, data) {
			if(er){
				//console.log(er);
				res.end(er.toString());
				return;
			}
			var temp = data.toString();
			//console.log(temp)
			
			temp = temp.replace("Template", req.url);
			
			res.end(temp);
		})
	
	*/
	return;	
		

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
	else if(req.url == "/about"){	
		fs.readFile('./about.html', function (er, data) {
			if(er){
				//console.log(er);
				res.end(er.toString());
				return;
			}
			res.end(data.toString());
		})
		
	}
	else if(req.url == "/jquery.js"){		
		fs.readFile('./js/jquery.js', function (er, data) {
			//console.log(er);
			//console.log(data.toString());
			res.end(data.toString());
		})
	} else if(req.url == "/home"){

		res.write("<html>")
		res.write("<body>")
		res.write("<h1 data-abc='mydata'>Home</h1>")
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
		//res.end("Invalid Page");
		
		fs.readFile('./error.html', function (er, data) {
			if(er){
				//console.log(er);
				res.end(er.toString());
				return;
			}
			res.end(data.toString());
		})
	}
	
})
server.listen(3000)


/*

import http = require("http");


http.createServer(function(req, res){
	
	res.end("Hello World");
}).listen(3000);

*/
