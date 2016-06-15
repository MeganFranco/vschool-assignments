var express = require("express");
var postRouter = express.Router();
var Post = require("../models/posts")

postRouter.get("/posts", function (req, res) {
    Post.find(function (err, posts) {
        if (err) throw err;
        res.send(posts);
    });
});

postRouter.post("/posts", function (req, res) {
    var newPost = new Post(req.body);
    newPost.save(function (err, post) {
        if (err) throw err;
        res.send(post);
    })
});


module.exports = postRouter;

//
//app.delete("/posts/:postId/", function (req, res) {
//    for (var i = 0; i < posts.length; i++) {
//        if (posts[i].id === req.params.postId) {
//            posts.splice(i, 1);
//            console.log("deleting")
//            res.send(posts)
//        }
//    }
//});

