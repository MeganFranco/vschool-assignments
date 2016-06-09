var express = require("express");
var bountyRoutes = express.Router();
var uuid = require("uuid");
var bounties = require("../models/bounties");

bountyRoutes.get("/", function (req, res) {
    res.send(bounties);
})

bountyRoutes.post("/", function (req, res) {
    req.body.id = uuid.v4();
    bounties.push(req.body);
    res.send(bounties);
    //res.send(req.body)
})

bountyRoutes.delete("/:bountyId/", function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {
            bounties.splice(i, 1);
            return res.send("Deleted!")
        }
    }
    res.send("no bounty with that id found");
})

bountyRoutes.put("/:bountyId/", function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {
            bounties[i] = req.body;
            return res.send(bounties[i]);
        }
    }
    res.send("no bounty with that id found");
});

module.exports = bountyRoutes

