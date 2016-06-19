var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var dogRouter = require("./routes/dogRoutes");

app.use("/", express.static(__dirname))
/*because Brackets doesn't have live preview*/
app.use(bodyParser.json());
app.use(cors());

app.use("/dogs", dogRouter);
/*or app.use("/api/dogs") to let everyone know that this */
mongoose.connect("mongodb://localhost/dogs");

app.listen(8000, function () {
    console.log("I'm listening to you listening to me...");
});