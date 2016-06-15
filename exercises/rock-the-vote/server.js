var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var cors = require("cors");
var postRouter = require("./routes/postRoutes");
//var posts = require("./models/posts");
app.use(bodyParser.json());
app.use(cors());
app.use(postRouter);
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/posts");

//app.get("/posts", function (req, res) {
//    res.send(posts);
//});



app.listen(8000, function (req, res) {
    console.log("app is listening");
});