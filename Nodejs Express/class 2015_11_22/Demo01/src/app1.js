/// <reference path="./../typings/tsd.d.ts" />
var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
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
app.get("/home", function (req, res) {
    res.send("Home Page");
});
app.get("/logout", function (req, res) {
    req.session["isLogin"] = false;
    req.session["user"] = null;
    res.redirect("/finance");
});
app.get("/finance", restrictedRoutes, function (req, res) {
    var html = "Finance Page <br><br>" + req.session["user"] + " : <a href='/logout' >Logout</a>";
    console.log(req.session);
    res.send(html);
});
app.get("/a", function (req, res) {
    req.session["user"] = { name: "Rehan", id: 1 };
    res.json(req.session);
});
app.get("/b", function (req, res) {
    console.log(req.session["user"]);
    res.json(req.session["user"]);
});
var todos = [];
app.get("/", function (req, res) {
    console.log(todos);
    var tmp = [];
    for (var i = 0; i < todos.length; i++) {
        if (req.session["user"] == todos[i].user) {
            tmp.push(todos[i]);
        }
    }
    res.render("./index", { todos: JSON.stringify(tmp) });
});
app.get("/detetetodo/:id", function (req, res) {
    for (var i = 0; i < todos.length; i++) {
        if (req.params.id == todos[i].id) {
            todos.splice(i, 1);
            break;
        }
    }
    res.redirect("/");
});
app.post("/", function (req, res) {
    var obj = {
        id: Date.now(),
        todo: req.body.todo,
        user: req.session["user"]
    };
    todos.push(obj);
    res.redirect("/");
});
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
app.get("/todo/:id", function (req, res) {
    res.json(todos);
});
app.delete("/todo/:id", function (req, res) {
});
app.post("/todo", function (req, res) {
});
app.put("/todo/:id", function (req, res) {
});
app.use(function (a) {
    return function (req, res, next) {
        console.log(a);
        next();
    };
})(1 + 1) * 2;
calc(calc(calc(1, 2), 3), 4);
function calc(a, b) {
    return a + b;
}
function abc(a) {
    console.log(a);
}
abc(1 + 3);
var path1 = require("path");
var a = "/a/";
var b = "/b/";
var d = path1.resolve(a, b)
    / a / b;
/;
var c = a + b;
/a/ / b /
    app.get("/user/:id");
app.delete("/user/:id");
app.post("/user");
app.put("/user/:id");
app.use(function (req, res, next) {
    console.log((req.ip = "1"));
    next();
});
app.use(function (req, res, next) {
    console.log(req.ip);
    res.send(req.ip);
});
var a = 1;
app.locals.per = 1;
var title = "OLX";
