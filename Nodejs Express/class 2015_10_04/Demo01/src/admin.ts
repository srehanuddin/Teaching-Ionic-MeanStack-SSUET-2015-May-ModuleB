/// <reference path="./../typings/tsd.d.ts" />

import express = require('express');
var admin = express.Router();
admin.use(function(req,res,next){
	next();
})
admin.get("/home", function(req, res){
	res.send("ADMIN Home");
});
admin.get("/about", function(req, res){
	res.send("ADMIN About");
});
admin.get("/home", function(req, res){
	res.send("ADMIN Home");
});
export = admin;

