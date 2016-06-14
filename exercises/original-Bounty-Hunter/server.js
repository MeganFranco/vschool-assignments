//http://coursework.vschool.io/the-original-bounty-hunter/

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = process.envPORT || 8000
var bountyRoutes = require("./routes/bountyRoutes"); // create new router object
var cors = require("cors")

app.use(cors())
app.use(bodyParser.json());
//any time a request comes to the 'bounty' route use bountyRoutes
app.use(bountyRoutes);

mongoose.connect("mongodb://localhost/bounties");


app.listen(8000, function () {
    console.log("App is listening on port " + port)
})