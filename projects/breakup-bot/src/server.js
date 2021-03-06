var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var morgan = require("morgan");
var config = require("./config");
var path = require("path");
var port = process.env.PORT || 8000;
var expressJwt = require("express-jwt");

var botRoutes = require("./routes/botRoutes")

mongoose.connect(config.database, function() {
    console.log("Connection to mongodb successful");
});

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "public")));

//app.use("/api", expressJwt({secret: config.secret}));

app.use("/auth", require("./routes/authRoutes"));
app.use("/api/responses/", botRoutes);

app.listen(port, function() {
    console.log("App is listening on port " + port);
});



/////Make DB///////
//var MongoClient = require("mongodb").MongoClient;
//var ObjectId = require("mongodb").ObjectId; //allows you to construct object id objects
//var bodyParser = require("body-parser");
//var url = "mongodb://localhost:27017/whys"
