var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var morgan = require("morgan");
var config = require("./config");
var path = require("path");
var port = process.env.PORT || 5000;
var expressJwt = require("express-jwt");

// var botRoutes = require("./routes/botRoutes")

mongoose.connect(config.database, function() {
    console.log("Connection to mongodb successful");
});

mongoose.connection.on("connected", function () {
    console.log("Pop goes the weasel");
});

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/auth", require("./routes/authRoutes"));
app.use("/api", expressJwt({secret: config.secret}));
app.use("/api/failure", require("./routes/failureRoutes"));
// app.use("/api/responses/", botRoutes);



app.listen(port, function() {
    console.log("App is listening on port " + port);
});
