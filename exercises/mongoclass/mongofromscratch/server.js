var express = require("express");
var app = express();
var MongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;
var port = process.envPORT || 8000
var bodyParser = require("body-parser");

app.use(bodyParser.json());

var url = "mongodb://localhost:27017/practice"

app.get("/shoes", function (req, res) {
    var collection = db.collection("shoes");

    collection.find().toArray(function (err, items) {
        if (err) throw err;

        res.send(items);
    });
});

app.get("/shoes/:id", function (req, res) {
    var collection = db.collection("shoes");

    collection.findOne({_id: ObjectId(req.params.id)}, function(err, item){
        if(err) throw err;
        res.send(item);
    })
});


app.post("/shoes", function (req, res) {
    var collection = db.collection("shoes");

    collection.insertOne(req.body, function (err, result) {
        if (err) throw err;
        res.send(result.ops[0]);
    });
});


app.delete("/shoes/:id/", function (req, res) {
    var collection = db.collection("shoes");

    collection.deleteOne({
        _id: ObjectId(req.params.id)
    }, function (err, result) {
        if (err) throw err;
        res.send({
            success: true,
            deleteCount: result.deletedCount
        });
    });

});


//app.get("/shoes", function(req, res){})
//app.get("/shoes", function(req, res){})

MongoClient.connect(url, function (err, database) {
    if (err) throw err;

    db = database;

    app.listen(port, function () {
        console.log("App is listening on port " + port)
    });
});