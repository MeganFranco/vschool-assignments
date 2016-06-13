var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");

app.use(bodyParser.json());

var someData = [];

app.get("/", function(req, res){
    console.log(req)
    res.send("Hola!")
    
});

app.post("/", function(req, res){
    var body = req.body;
    res.send(req.body)
})

app.put("/", function(req, res){
    res.send("Soooo we'd like to update something?")
})








app.listen(8000, function(){
    console.log("app is listening");
});