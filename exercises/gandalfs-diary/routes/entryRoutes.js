var express = require("express");
var diaryRouter = express.Router();
var Entry = require("../models/entry");

diaryRouter.get("/entries", function (req, res) {
    Entry.find(function (err, entries) {
        if (err) throw err;
        res.send(entries);
    })
});

diaryRouter.post("/entries", function (req, res) {
    var newEntry = new Toy(req.body);
    newEntry.save(function (err, entry) {
        if (err) throw err;
        res.send(entry);
    })

});

module.exports = diaryRouter;