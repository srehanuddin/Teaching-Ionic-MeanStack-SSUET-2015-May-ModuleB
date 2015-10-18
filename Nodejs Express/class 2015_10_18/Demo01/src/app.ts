/// <reference path="./../typings/tsd.d.ts" />

import express = require('express');
import path = require("path");
import bodyParser = require('body-parser');

import admin = require("./admin");

var app : express.Express = express();

var port: number = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("Is in listening mode.")
});

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())


//app.use(express.static(path.join(__dirname, './public')));
app.use(express.static("./public"));

console.log(path.join(__dirname, './views'))

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs'); 

var todos : Array<{ id : number, todo: string }> = [];

app.get("/", function(req, res){
	console.log(todos);
	res.render("./index", { todos : JSON.stringify(todos) });
})

app.get("/detetetodo/:id", function(req, res){	
	for(var i = 0; i < todos.length; i++ ){
		if(req.params.id == todos[i].id){
			todos.splice(i , 1);
			break;			
		}
	}
	res.redirect("/");
})

app.post("/", function(req, res){
	var obj = {
		id : Date.now(),
		todo : req.body.todo
	}	
	todos.push(obj)
	res.redirect("/");
})


/*
app.post("/", function(req, res){
	console.log("req.body");
	console.log(req.body);
	
	var obj = {
		todo : req.body.todo,
		id : todos.length + 1
	}
	
	todos.push(obj);
	
	res.render("./index", { todos : JSON.stringify(todos) });
})
*/

