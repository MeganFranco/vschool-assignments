var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var dogRouter = require("./routes/dogRoutes");
var path = require("path");

app.use(bodyParser.json());
app.use(cors());

app.use("/", express.static("public"));
app.use("/api/dogs", dogRouter);

mongoose.connect("mongodb://localhost/dogs");

app.listen(8000, function () {
    console.log("I'm listening to you listening to me...");
});