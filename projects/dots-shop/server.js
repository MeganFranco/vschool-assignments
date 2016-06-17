var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
//require routes here**************

app.use(bodyParser.json());
app.use(cors());
//app.use routes************

app.use("/", express.static(__dirname))
