var express = require("express");
var dogRouter = express.Router();
var Dog = require("../models/dogs");

//////Sanitizing inputs//////

var query = {};
if (req.query.breed){
    query.breed = req.query.breed
}/*and as you continue to grow the site, then you keep adding else-ifs to maintain the querying*/
    
dogRouter.get("/", function(req, res) {
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


///////*You also want to sanitize your put requests*/////////
//grab the id that's in the url
// the id that's in req.body
// make sure req.body exists, and that it's equal to what was in the idbar

dogRouter.put("/:id", function(req, res) {
    
    var id = req.params.id;
    var dog = req.body;
    if (dog && dog._id !== ud){
        return req.status(500).send("Ids don't match")
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

module.exports = dogRouter;



/*
**
Look into using toastr: https://codeseven.github.io/toastr/
**
*/