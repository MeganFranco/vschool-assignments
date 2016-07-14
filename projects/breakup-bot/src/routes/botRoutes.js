//////Modules Etc.//////✔
var express = require("express");
var app = express();
var cors = require("cors");
var botRouter = express.Router();
var botLogic = require("../lib/botLogic.js");
var WhyResponse = require("../models/whyResponses");
var mongoose = require("mongoose");
///////Middleware////////
app.use(cors());

//when you have your your
//create the endpoint in the app.js

//get info//
botRouter.route("/")
    .get(function (req, res) {
        return req;
        console.log("hello")
    })
    .post(function (req, res) {
//    console.log("in put function, req= " + req.body.input)
        var text = req.body.input;
        var response = botLogic.breakupBot(text);
        //    if(if reponse is a why reponse){
        //        mongo.wyarray.save
        //    }
    console.log(response.response + " botRoutes line 28")
//    console.log(typeof response + ": response")
    //typeof response.why is undifined on this line... the if function is now running...
//    console.log( typeof response.why + " botRoutes line 31")

        if(response.why === true){
//            console.log(typeof response.why)
            console.log(req.body)
//            var query = {_id: 1};

            WhyResponse.findOneAndUpdate( {response:response.response, _id: 1, }, {upsert: true}, function(err, whyResponse){
                console.log(whyResponse)
                if(err)
                    res.status(500).send(err);
                    res.send(whyResponse);
            })

        } else {
                    res.send(response.response);
        }

    })

module.exports = botRouter;

//todoRouter.route("/")
//    .get(function (req, res) {
//        Todo.find({user: req.user._id}, function (err, todos) {
//            if (err) res.status(500).send(err);
//            else res.send(todos);
//        });
//    })
//    .post(function (req, res) {
//        var newTodo = new Todo(req.body);
//        newTodo.user = req.user._id;
//
//        newTodo.save(function (err, todo) {
//            if (err) res.status(500).send(err);
//            else res.status(201).send(todo);
//        });
//    });
//
//todoRouter.route("/:todoId")
//    .get(function (req, res) {
//        Todo.findOne({_id: req.params.todoId, user: req.user._id}, function (err, todo) {
//            if (err) res.status(500).send(err);
//            else res.send(todo);
//        });
//    })
//    .put(function (req, res) {
//        Todo.findOneAndUpdate({_id: req.params.todoId, user: req.user._id}, req.body, {new: true}, function(err, todo) {
//            if (err) res.status(500).send(err);
//            else res.send(todo);
//        });
//    })
//    .delete(function (req, res) {
//        Todo.findOneAndRemove({_id: req.params.todoId, user: req.user._id}, function(err, todo) {
//            if (err) res.status(500).send(err);
//            else res.send(todo);
//        });
//    });
//
//module.exports = todoRouter;
