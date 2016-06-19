var express = require("express");
var app = express();
var mongoose = require("mongoose")
//var port = process.envPORT || 8000
var bodyParser = require("body-parser");
var dogRouter = require("./routes/dogRoutes");
var Dog = require("./models.dogs.js")

app.use(bodyParser.json());
app.use(cors());

app.use(dogRouter)
mongoose.connect("mongodb://localhost/dogs")

app.listen (8000, function(){
    console.log("App is listen on port 8000")
})