///<reference path="./typings/node/node.d.ts" />
///<reference path="./typings/express/express.d.ts" />
var express = require("express");
var app = express();
var ejs = require("ejs");
app.set('views', "./views");
app.set('view engine', 'ejs');
app.use(express.static("./public"));
app.get("/", function (req, res) {
    res.send("ABC");
});
app.get("/home", function (req, res) {
    var a = "My Name";
    res.render("./index", { title: a });
});
app.get("*", function () {
});
app.listen(3000);
