/// <reference path="./../typings/tsd.d.ts" />
var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
mongoose.connect('mongodb://localhost/todos');
var todoSchema = new mongoose.Schema({ todo: String, user: String });
var todoModel = mongoose.model('task', todoSchema);
var visitSchema = new mongoose.Schema({ user: String, time: Date });
var visitModel = mongoose.model('views', visitSchema);
var app = express();
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Is in listening mode.");
});
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, './public')));
app.use(express.static("./public"));
console.log(path.join(__dirname, './views'));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(session({
    genid: function (req) {
        return (Date.now().toString()); // use UUIDs for session IDs 
    },
    secret: '123456789'
}));
var user = "Rehan";
var pass = "123456";
var user2 = "User2";
var pass2 = "123456";
app.post("/login", function (req, res) {
    if (req.body.user == user && req.body.password == pass) {
        req.session["isLogin"] = true;
        req.session["user"] = user;
        res.send("Login Successfully");
    }
    else if (req.body.user == user2 && req.body.password == pass2) {
        req.session["isLogin"] = true;
        req.session["user"] = user2;
        res.send("Login Successfully");
    }
    else {
        res.send("Invalid Use Password");
    }
});
function restrictedRoutes(req, res, next) {
    if (req.session["isLogin"] != true) {
        res.send("Not Authorized");
    }
    else {
        next();
    }
}
app.get("/", function (req, res) {
    todoModel.find({ user: req.session["user"] }, function (err, data) {
        var visitRecord = new visitModel({
            time: new Date(),
            user: req.session["user"]
        });
        visitRecord.save(function () {
            res.render("./index", { todos: JSON.stringify(data) });
        });
        visitModel.update({}, { user: "ABC" }, { multi: true }, function (err, num) {
            console.log(num);
            console.log("Update Count : " + num);
        });
        /*
        visitModel.count({ user : req.session["user"] }, function(err, data){
            console.log(data)
        })	*/
    });
    /*
    console.log(todos);
    var tmp = [];
    for(var i = 0; i < todos.length; i++){
        if(req.session["user"] == todos[i].user){
            tmp.push(todos[i]);
        }
    }
    res.render("./index", { todos : JSON.stringify(tmp) });
    */
});
app.get("/detetetodo/:id", function (req, res) {
    todoModel.remove({ _id: req.params.id }, function () {
        res.redirect("/");
    });
    /*
    for(var i = 0; i < todos.length; i++ ){
        if(req.params.id == todos[i].id){
            todos.splice(i , 1);
            break;
        }
    }
    res.redirect("/");
    */
});
//var todos : Array<{ id : number, todo: string, user : string }> = [];
app.post("/", function (req, res) {
    var obj = {
        todo: req.body.todo,
        user: req.session["user"]
    };
    var task = new todoModel(obj);
    task.save(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.redirect("/");
        }
    });
});
/*
app.get("/todo/:id", function(req, res){
    res.json(todos);
})
*/
var complexSchema = new mongoose.Schema({
    user: {
        name: String,
        address: String,
        email: [String],
        phone: [String]
    },
    school: {
        class1: {
            Subjects: [String]
        },
        class2: {
            Subjects: [String]
        },
        classes: [
            { className: String, subjects: [String] }
        ]
    },
    time: Date
});
var complexModel = mongoose.model('complex', complexSchema);
/*
var complexObj = new complexModel({
    user : {
        name : "Shahzaib",
        email : [ "Shahzaib@gmail.com", "Shahzaib@live.com" ],
        phone : [ "789", "789" ]
    },
    school : {
        class1 : {
            Subjects : ["English1", "Urdu1"]
        },
        class2 : {
            Subjects : ["English1", "Urdu1"]
        },
        classes : [
            { className : "BS1", subjects : ["English1", "Urdu1"] }
        ]
    },
    time : new Date()
})

complexObj.save();
*/
//complexModel.find({ "user.name" : "Rehan"}, function(err, data){
//complexModel.find({ "user.email" : "s.rehanuddin@gmail.com"}, function(err, data){
//complexModel.find({ "time" : { $gte : new Date() } }, function(err, data){
//complexModel.find({ "time" : { $lte : new Date() } }, function(err, data){
//complexModel.find({ "time" : { $lte : new Date(2015, 11, 20, 5, 17) } }, function(err, data){
//complexModel.find({ "time" : { $lte : new Date(), $gte : new Date(2014, 11, 20, 5, 17) } }, function(err, data){
//complexModel.find({ "time" : { $lte : new Date() }, "user.name" : "Rehan" }, function(err, data){
//complexModel.find({ "time" : { $lte : new Date() }, "user.name" : "Rehan", "user.email" : "s.rehanuddin@gmail.com" }, function(err, data){
//{ "user.name" : "Rehan"}
//{ "user.name" : "Ali"}
{
    $or: [
        { "user.name": "Rehan", "user.email": "s.rehanuddin@gmail.com" },
        { "user.name": "Ali" }
    ];
}
//complexModel.find({ $or : [{ "user.name" : "Rehan"},{ "user.name" : "Ali1"}] }, function(err, data){
//{ "user.name" : { $in : ["Rehan", "Ali"] }}
//complexModel.find({ "user.name" : { $in : ["Rehan", "Ali"] }}, function(err, data){
//{ "user.name" : { $nin : ["Rehan", "Ali"] }}
complexModel.find({ "user.name": { $nin: ["Rehan", "Ali"] } }, function (err, data) {
    console.log(data);
    console.log(data.length);
});
