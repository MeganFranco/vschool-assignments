var express = require('express');
var app = express();
var mongoose = require("mongoose")
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8000
var entryRouter = require("./routes/entryRoutes")

app.use(bodyParser.json());
app.use(entryRouter);
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static(__dirname));

mongoose.connect("mongodb://localhost/entries");

//app.listen(PORT);
console.log('App is listening on port ' + PORT);