var express = require("express");
var app = express();
var MongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId; //allows you to construct object id objecs
var port = process.envPORT || 8000
var bodyParser = require("body-parser");

var url = "mongodb://localhost:27017/practice"

app.use(bodyParser.json());

app.get("/apples", function (res, res) {
    //grab instance of the collection you want to use
    var collection = db.collection("apples")
        //will either get or create the collection of the name you put in

    collection.find().toArray(function (err, items) {
        if (err) {
            throw err;
        }

        res.send(items);
    })
});

app.get("/apples/:id", function(req, res){
    var collection = db.collection("apples");
    
    collection.findOne({_id: ObjectId(req.params.id)}, function(err, item){
        if(err) throw err;
        res.send(item);
    });
});

app.post("/apples", function (req, res) {
    var collection = db.collection("apples");

    if (Object.keys(req.body).length === 0 &&  req.body.constructor === Object) {
        res.send("You must provide an apple object in the body of the request")
    } else {
        collection.insertOne(req.body, function (err, result) {
            if (err) throw err;
            res.send(result.ops[0]);
        })
    }
});

app.delete("/apples/:id", function(req, res){
    var collection = db.collection("apples");
    //pass in a search term --is how do I know the thing I want to delete? put that between the curly braces
    collection.deleteOne({_id: ObjectId(req.params.id)}, function(err, result){
        if(err) throw err;
        res.send({success: true, deleteCount: result.deletedCount});
    })
})

app.put("/apples:id", function(req, res){
    
})



MongoClient.connect(url, function (err, database) {
    if (err) {
        throw err;
    }

    db = database;

    app.listen(port, function () {
        console.log("App is listening on port " + port);
    });

});