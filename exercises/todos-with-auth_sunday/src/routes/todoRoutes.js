var express = require("express");
var todoRouter = express.Router();
var Todo = require("../models/todo");

todoRouter.route("/")
    .get(function (req, res) {
        Todo.find({user: req.user._id}, function (err, todos) {
            if (err) res.status(500).send(err);
            else res.send(todos);
        });
    })
    .post(function (req, res) {
        var newTodo = new Todo(req.body);
        newTodo.user = req.user._id;
    
        newTodo.save(function (err, todo) {
            if (err) res.status(500).send(err);
            else res.status(201).send(todo);
        });
    });

todoRouter.route("/:todoId")
    .get(function (req, res) {
        Todo.findOne({_id: req.params.todoId, user: req.user._id}, function (err, todo) {
            if (err) res.status(500).send(err);
            else res.send(todo);
        });
    })
    .put(function (req, res) {
        Todo.findOneAndUpdate({_id: req.params.todoId, user: req.user._id}, req.body, {new: true}, function(err, todo) {
            if (err) res.status(500).send(err);
            else res.send(todo);
        });
    })
    .delete(function (req, res) {
        Todo.findOneAndRemove({_id: req.params.todoId, user: req.user._id}, function(err, todo) {
            if (err) res.status(500).send(err);
            else res.send(todo);
        });
    });

module.exports = todoRouter;