/// <reference path="./../typings/tsd.d.ts" />

import express = require('express');
import path = require("path");
import logger = require("./logger");

var app : express.Express = express();

var port: number = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("Is in listening mode.")
});

//app.use(express.static(path.join(__dirname, './public')));
app.use(express.static("./public"));


app.use(logger.logger("RU"))
app.use(logger.logger("MYAPP"))
/*
let errs : string[] = [];

app.use(function(req, res, next){
	errs = [];
	next();	
})
app.use(function(req,res,next){
	console.log("Middleware 1")
	next();
})

let users : string[] = ['/ru', '/mk'];

app.use(function(req,res,next){
	console.log("Middleware 2")
	if (users.indexOf(req.url) != -1) {
		// next();
	} else {
		// next("Error in finding User");
		errs.push("Error in finding User");
		errs.push("Error in finding User2");
		
	}
	next();
})

app.use(function(req,res,next){
	console.log("Middleware 3")
	if (errs.length > 0) {
		next(errs.join(','))
	} else {
		next();
	}
})

app.use(function(err: any, req,res,next){
	console.log("Error Middleware")
	console.log(err)
	res.send(err);
})
*/

app.use('/admin', function (req: express.Request, res: express.Response, next: Function) {
  console.log('Middleware Mount for admin');
  console.log('Time:', Date.now());
  next();
});

app.use('/admin', function (req: express.Request, res: express.Response, next: Function) {
  console.log('Middleware Mount for second admin');
  console.log('Time:', Date.now());
  next();
});

app.use('/user', function (req: express.Request, res: express.Response, next: Function) {
  console.log('Middleware Mount for user');
  console.log('Time:', Date.now());
  next();
});

app.use(function (req: express.Request, res: express.Response, next: Function) {
  console.log('Middleware Mount');
  console.log('Time:', Date.now());
  next();
});

app.get("/", function(req, res, next){
	console.log('Home Page Request');
	next();
}, function(req, res){
	res.send("Home Page");
});

app.get('/admin',  (req, res, next) => {
	console.log("/admin middleware called")
	next();  
}, (req, res) => {
	res.send('Admin');  
});

app.get("/about", function(req, res){
	res.send("About Page");
});

app.get("/c", function(req, res){
	res.send("counter.toString()");
});

app.get("*", function(req, res){
	res.send("Hello World");
})
