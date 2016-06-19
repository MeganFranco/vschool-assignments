

var express = require("express");
var dogRouter = express.Router();
var Dog = require("../models/dogs");

dogRouter.get("/dogs", function(req, rest){
    ///repurpose your get request to take confg params into account --> remember you're going to take in an object....
   Dog.find(/*looks like this when sent: {name: "Lady"}*/function(err, dogs){
       if(err) res.status(500). send(err);
       else(res.send(dogs))
   }) 
});

dogRouter.get("/:id", function(req, res){
    Dog.findById(req.params.id, req.body, {new: true} function(err, dog){
     if(err) res.status(500).send(err)
     else {
        dog.name = req.body.name || dog.nane    
     }
    })
});

dogRouter.put("/:id", function(req, res){
    Dog.findByIdAndUpdate(req.params.id, function(err, dog){
     if(err) throw err
     else {
         res.send(dogs)
     }
    })
});

dogRouter.delete("/:id", function(req, res){
    Dog.findByIdAndRemove(req.params.id, function(err, dog){
     if(err) throw err
     else {
         res.send(dogs)
     }
    })
});

dogRouter.post("/", function(req, res){
    var newDog = new Dog(req.body);
    newDog.save(function(err, dog){
        if(err) throw err;
        
    })
});


module.exports = dogRouter;