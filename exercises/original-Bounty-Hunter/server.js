//http://coursework.vschool.io/the-original-bounty-hunter/

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var cors = require("cors");
var bountyRoutes = require("./routes/bountyRoutes") // create new router object
app.use(bodyParser.json());
app.use(cors());


//any time a request comes to the 'bounty' route use bountyRoutes
app.use("/bounty", bountyRoutes)





app.listen(8000, function () {
    console.log("App is listening")
})