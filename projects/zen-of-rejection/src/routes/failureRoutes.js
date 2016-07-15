var express = require("express");
var failureRouter = express.Router();
var Failure = require("../models/failure");

failureRouter.post("/", function (req, res) {
    console.log(req.user);
    //HOW CAN I ALSO SEND THE DATE?
    var newFail = new Failure(req.body);
    newFail.user = req.user._id;
    console.log(newFail);
    newFail.save( function(err, failure) {
        if (err) res.status(500).send(err);
        else res.status(201).send(failure);
    })
});

failureRouter.get('/', function (req, res) {
    Failure.find({user: req.user._id}, function (err, failures){
        if(err) res.status(500).send(err);
        else res.send(failures)
    })
});

failureRouter.delete('/:failureId', function (req, res) {
    Failure.findOneAndRemove ( {_id: req.params.failureId, user: req.user._id}, function(err, failure){
         if (err) res.status(500).send(err);
        else res.send(failure);
    })

});




module.exports = failureRouter;