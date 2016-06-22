var express = require("express")
var app = express();
var bodyParser = require("body-parser")
var cors = require("cors");
var mongoose = require("mongoose");
var morgan = require("morgan")
var path = require("path")
var port = process.env.port || 8000;

mongoose.connect("mongodb://localhost/todosWithAuth")

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "..", "public")))

app.listen(port, function(){
console.log("app is listening")
})