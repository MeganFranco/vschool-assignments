var express = require("express");
var todoRouter = express.Router();
var Todo = require("../models/todo")

todoRouter.route("/")
    .get(function (req, res) {
        Todo.find(function (err, todos) {
            if (err) throw err;
            res.send(todos)
        });
    });
.post(function (req, res) {
    var newTodo = new Todo(req.body);
    newTodo.save(function (err, todo) {
        if (err) throw err;
        res.send(todo)
    });
});

rodoRouter.route("/:todoId")
    .get(function (req, res) {
        Todo.find(req.params.todoId, function (err, todo) {
            if (err) throw err;
            res.send(todo);
        });
    })

.put(function (req, res) {
        Todo.findByIdAndUpdate(req.params.todoId, req.body, {
            new: true
        }, function (err, todo) {
            if (err) throw err;
            res.send(todo)
        });
    })
    .delete(function (req, res) {
        Todo.findByIDAndRemove(req.params.todoId, function(err, thing){
            if (err) throw err;
            res.send(thing)
        })

    })