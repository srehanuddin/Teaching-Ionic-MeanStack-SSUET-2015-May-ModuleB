/// <reference path='../typings/tsd.d.ts' />
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, '/../../client'));
//app.set('view engine', 'ejs'); 
app.use(express.static(path.join(__dirname, '/../../client')));
app.use(express.static(path.join(__dirname, '/../../node_modules')));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var angularRoutes = [
    "/about"
];
app.use(angularRoutes, function (req, res) {
    console.log(path.join(__dirname, '/../../client/index.html'));
    res.sendFile(path.join(__dirname, '/../../client/index.html'));
});
var todos = [];
//Get - Read Todos
app.get("/api/todo/:id?", function (req, res) {
    if (req.params.id) {
        for (var i = 0; i < todos.length; i++) {
            if (req.params.id == todos[i].id) {
                res.json(todos[i]);
                return;
            }
        }
        res.json({ status: false, message: "Not Found" });
    }
    else {
        res.json(todos);
    }
});
//Delete - Destroy/Delete Todos
app.delete("/api/todo/:id", function (req, res) {
    for (var i = 0; i < todos.length; i++) {
        if (req.params.id == todos[i].id) {
            todos.splice(i, 1);
            res.json({ status: true });
            return;
        }
    }
    res.json({ status: false, message: "Not Found" });
});
//Delete - Create Todos
app.post("/api/todo", function (req, res) {
    console.log("req.body");
    console.log(req.body);
    var obj = {
        id: Date.now(),
        task: req.body.task,
        desp: req.body.desp
    };
    todos.push(obj);
    res.json({ status: true, todo: obj });
});
//Delete - Update Todos
app.put("/api/todo/:id?", function (req, res) {
    if (req.params.id) {
        for (var i = 0; i < todos.length; i++) {
            if (req.params.id == todos[i].id) {
                todos[i].task = req.body.task;
                res.json(todos[i]);
                return;
            }
        }
        res.json({ status: false, message: "Not Found" });
    }
    else {
        res.json({ status: false, message: "Invalid Id" });
    }
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var listeningPort = server.address().port;
    console.log('The server is listening on port: ' + listeningPort);
});
