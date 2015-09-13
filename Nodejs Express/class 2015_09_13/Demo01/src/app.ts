/// <reference path="./../typings/tsd.d.ts" />

import express = require('express');
import path = require("path");


var app : express.Express = express();

var port: number = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("Is in listening mode.")
});


//app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, "./public")));

app.use(function(req, res, next){
	counter++;
	next();
});

app.use(function(req, res, next){
	console.log("REQ : " + req.method + " - " + req.url);
	next();	
})

/*
app.use(function(req, res, next){
	next();
})

app.use(myFN("1"));
*/


/*
function myFN(a){	
	return function(req,res,next){
		
	}
}*/


var counter = 0;

app.get("/", function(req, res){
	res.send("Home Page");
});

app.get("/about", function(req, res){
	res.send("About Page");
});

app.get("/c", function(req, res){
	res.send(counter.toString());
});

app.get("*", function(req, res){
	res.send("Hello World");
})
