/// <reference path="./../typings/tsd.d.ts" />
var express = require('express');
var path = require("path");
var admin = require("./admin");
var app = express();
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Is in listening mode.");
});
//app.use(express.static(path.join(__dirname, './public')));
app.use(express.static("./public"));
console.log(path.join(__dirname, './views'));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use("/admin", admin);
app.use(function (req, res, next) {
    console.log("Without Mount : " + req.path);
    next();
});
app.get("/query", function (req, res) {
    console.log(req.query);
    console.log("a : " + req.query.a);
    res.send("Test");
});
app.get("/about", function (req, res) {
    res.send("User About");
});
app.get("/contact", function (req, res) {
    res.send("User Contact");
});
var users = [
    { id: 1, name: "Rehan", age: 24 },
    { id: 2, name: "A", age: 24 },
    { id: 3, name: "B", age: 24 },
    { id: 4, name: "C", age: 24 },
    { id: 5, name: "D", age: 24 },
    { id: 6, name: "E", age: 24 },
    { id: 7, name: "f", age: 24 },
    { id: 8, name: "G", age: 24 },
];
app.get("/", function (req, res) {
    res.render("./index");
});
app.get("/search", function (req, res) {
    console.log(req.query.q);
    for (var i = 0; i < users.length; i++) {
        if ((users[i].name).toLowerCase() == (req.query.q).toLowerCase()) {
            res.json(users[i]);
            return;
        }
    }
    res.send("User Not Found");
});
app.get("/user/:uid", function (req, res) {
    res.send(req.params.uid);
});
var products = [
    { id: 1, product: "A" },
    { id: 2, product: "B" },
    { id: 3, product: "C" }
];
app.get("/product/:pid?", function (req, res) {
    if (!req.params.pid) {
        res.json(products);
    }
    else {
        for (var i = 0; i < products.length; i++) {
            if ((products[i].id) == req.params.pid) {
                res.json(products[i]);
                return;
            }
        }
        res.send("Product Not Found");
    }
});
app.get("/product1/:pid?/:uid", function (req, res) {
    res.json(req.params);
});
