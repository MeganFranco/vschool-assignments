var express = require("express")
var todolistRoutes = express.Router();
var uuid = require("uuid");

module.exports = todolistRoutes;

var listofThings = [
    {
        item: "run",
        description: "move quickly on feet",
        id: uuid.v4(),
        
    },
    {
        item: "get groceries",
        description: "purchase sustanance",
        id: uuid.v4(),
    },

];

todolistRoutes.get("/", function (req, res) {
    res.send(listofThings);
});

todolistRoutes.post("/", function (req, res) {
    req.body.id = uuid.v4();
    console.log("hello!")
    res.send(listofThings);
});

todolistRoutes.delete("/:toDoListId/", function (req, res) {
    for (var i = 0; i < listofThings.length; i++) {
        if (listofThings[i].id === req.params.toDoLitsId) {
            listofThings.splice(i, 1);
             res.send(listofThings);
        }
    }

});

todolistRoutes.put("/:toDoListId", function (req, res) {
    for (var i = 0; i < listofThings.length; i++) {
        if (listofThings[i].id === req.params.listofThings.id) {
            bounties[i] = req.body;
            res.send(listofThings);
        }
    }

});



