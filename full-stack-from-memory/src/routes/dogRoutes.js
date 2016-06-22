var express = require("express");
var dogRouter = express.Router();
var Dog = require("../models/dogs");

dogRouter.get("/", function(req, res) {
    var query = {};
    if (req.query.breed) {
        query.breed = req.query.breed;
    }
    
    Dog.find(query, function(err, dogs) {
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
    var id = req.params.id;
    var dog = req.body;
    if (dog && dog._id !== id) {
        return res.status(500).send("Ids don't match");
    }
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

// TODO: Rename file to index.js to show what that
// does with calls to the require() function

module.exports = dogRouter;