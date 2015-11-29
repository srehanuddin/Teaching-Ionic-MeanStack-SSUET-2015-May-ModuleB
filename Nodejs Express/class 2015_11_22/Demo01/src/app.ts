/// <reference path="./../typings/tsd.d.ts" />

import express = require('express');
import path = require("path");
import bodyParser = require('body-parser');

import session = require('express-session');

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

app.use(session({
  genid: function(req) {
    return (Date.now().toString()) // use UUIDs for session IDs 
  },
  secret: '123456789'
}))




app.get("/postdata",function(req,res){
	
	//res.write(req.query)
	res.render("./postdata")
});
app.post("/postdata",function(req,res){
	//res.send(req.body)
	
	if(req.body.user == "rehan"){
		res.send("Allow");
	} else {
		res.send("Not Allow")
	}
});