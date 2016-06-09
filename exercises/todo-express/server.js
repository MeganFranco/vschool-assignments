var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var cors = require("cors");
var todolistRoutes = require("./routes/todoRoutes")
app.use(bodyParser.json());
app.use(cors());

app.use("/toDoList", todolistRoutes);



app.listen(8000, function () {
    console.log("app is listening");
});