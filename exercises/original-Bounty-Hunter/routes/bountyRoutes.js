var express = require("express");
var app = express();
var bountyRoutes = express.Router();
var mongoose = require("mongoose");
var Bounty = require("../models/bounties");
//var bodyParser = require("body-parser");
//
//app.use(bodyParser.json());

bountyRoutes.get("/bounties", function (req, res) {
    //    console.log("a get request was made")
    Bounty.find(function (err, bounties) {
        if (err) throw err;
        res.send(bounties)
    });
});

bountyRoutes.post("/bounties", function (req, res) {
    var newBounty = new Bounty(req.body);
    //    res.send(newBounty)
    newBounty.save(function (err, bounty) {
        if (err) throw err;
        res.send(bounty)
    });
});

bountyRoutes.delete("/bounties/:id", function (req, res) {
    Bounty.findByIdAndRemove(req.params.id, function (err, bounty) {
        var response = {
            message: "Bounty successfully deleted",
//            id: bounty.id
        };
        res.send(response);
    });
});
//
//bountyRoutes.delete("/bounties/:bountyId/", function (req, res) {
//    for (var i = 0; i < bounties.length; i++) {
//        if (bounties[i].id === req.params.bountyId) {
//            bounties.splice(i, 1);
//            return res.send("Deleted!")
//        }
//    }
//    res.send("no bounty with that id found");
//})
//
//bountyRoutes.put("/bounties/:bountyId/", function (req, res) {
//    for (var i = 0; i < bounties.length; i++) {
//        if (bounties[i].id === req.params.bountyId) {
//            bounties[i] = req.body;
//            return res.send(bounties[i]);
//        }
//    }
//    res.send("no bounty with that id found");
//});

module.exports = bountyRoutes