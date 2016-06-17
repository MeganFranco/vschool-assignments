var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");

//require routes here**************

var productRouter = require("./routes/productRoute")

app.use(bodyParser.json());
app.use(cors());
app.use(productRouter) 

app.use("/", express.static(__dirname))

mongoose.connect("mongodb://localhost/products");

app.listen(8000, function(){
    console.log("App is listening")
})
