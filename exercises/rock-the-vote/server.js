var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var cors = require("cors");
var posts = require("./models/posts")
app.use(bodyParser.json());
app.use(cors())

//Each item will have a title
//Each item will have a description
//Each item can be upvoted or downvoted
//Items will be ordered by upvotes (the most being at the top).
//Each item should show the total number of votes



app.get("/posts", function (req, res) {
    res.send(posts);
});

app.get("/posts/:postId", function (req, res) {
    for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === req.params.postId){
            res.send(posts[i])
        }
    }
  //  res.send(posts);
});

app.post("/posts", function (req, res) {
    //    console.log(body.req);
    req.body.id = uuid.v4();
    posts.push(req.body);
    res.send(posts)
});

app.delete("/posts/:postId/", function (req, res) {
    for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === req.params.postId) {
            posts.splice(i, 1);
            console.log("deleting")
            res.send(posts)
        }
    }
});

app.listen(8000, function (req, res) {
    console.log("app is listening");
});