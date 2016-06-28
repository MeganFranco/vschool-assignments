//////Modules Etc.//////✔
var express = require("express");
var app = express();
var cors = require("cors");
var botRouter = express.Router();
var botLogic = require("../lib/botLogic.js");

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
        //        console.log(req.body); 
        //        console.log("botRoutes line 22") 
//        console.log(req.body.input + " line 23")
        var text = req.body.input;
                console.log(text + " botRotes25")
        //        console.log(botLogic + " botLogic")
        //        console.log(botLogic.breakupBot + " botLogic.breakupBot")
    console.log(botLogic.breakupBot(text) + " line 28")
        var output = botLogic.breakupBot(text);
        console.log(output)
        console.log("line 30")
        var response = Response.breakupBot(text);
        res.send(response);
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