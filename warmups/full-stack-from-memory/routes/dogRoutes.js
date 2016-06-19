var express = require("express");
var dogRouter = express.Router();
var Dog = require("../models/dogs");

dogRouter.get("/", function(req, res) {
    Dog.find(req.query, function(err, dogs) {
        if (err) res.status(500).send(err);
        else res.send(dogs);
    });
});

dogRouter.get("/:id", function(req, res) {
    Dog.findById(req.params.id, function(err, dog) {
        if (err) res.status(500).send(err);
        else res.send(dog);
    });
});

dogRouter.post("/", function(req, res) {
    var newDog = new Dog(req.body);
    newDog.save(function(err, dog) {
        if (err) res.status(500).send(err);
        else res.send(dog);
    });
});

dogRouter.put("/:id", function(req, res) {
    Dog.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, dog) {
        if (err) res.status(500).send(err);
        else res.send(dog);
    });
});

dogRouter.delete("/:id", function(req, res) {
    Dog.findByIdAndRemove(req.params.id, function(err, dog) {
        if (err) res.status(500).send(err);
        else res.send(dog);
    });
});

module.exports = dogRouter;