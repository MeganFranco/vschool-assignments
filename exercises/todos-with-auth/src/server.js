var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
//bring in the config file
var config = require("./config")
var morgan = require("morgan");
var path = require("path");
var port = process.env.PORT || 8000;
var expressJwt = require("express-jwt") /*middleware that looks for/detects/decodes a token when you send it and then adds the info and allows anymore middleware down the line to have access to your user object*/

//it's usually common practice to have a configuration file for this
//mongoose.connect("mongodb://localhost/todosWithAuth", function() {
//    console.log("Connection to mongodb successful");
//});

mongoose.connect(config.database, function() {
    console.log("Connection to mongodb successful");
});

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", expressJwt( { secret: config.secret } )); /*protect everything on '/api' you can add exceptions if you want... (check the docs)*/

app.use("/auth", require("./routes/authRoutes"));
app.use("/api/todos", require("./routes/todoRoutes"));/*You need to protect your routes*/

app.listen(port, function() {
    console.log("App is listening on port " + port);
});