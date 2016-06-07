//http://coursework.vschool.io/the-original-bounty-hunter/

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

var bounties = [];

app.get("/bounty", function(req, res){
    res.send(bounties);
})

app.post("/bounty", function(req, res){
    req.body.id = uuid.v4();
    bounties.push(req.body);
     res.send(bounties);
})

app.delete("/bounty/:bountyId/", function(req, res){
    for(var i = 0; i < bounties.length; i++){
        if(bounties[i].id === req.pparams.bountyId){
            bounties.splice(i, 1);
            res.send("Deleted!")
        }
    }
})

app.put("/bounty/:bountyId/", function(req, res){
    for(var i = 0; i < bounties.length; i++){
        if(bounties[i].id === req.params.bountyId){
            bounties[i] = req.body;
            res.send(bounties[i])
        }
    }
    res.send("no bounty with that id found")
})


app.listen(8000, function(){
    console.log("App is listening")
})