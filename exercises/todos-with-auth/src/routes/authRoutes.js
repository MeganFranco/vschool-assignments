var express = require("express");
var authRouter = express.Router();
var User = require("../models/user");
var jwt = require("jsonwebtoken")
var config = require("../config")

//you need to pass in the user-name and password 
authRouter.post("/login", function(req, res){
   User.findOne({username: req.body.username}, function(err, user){
       if (err) res.status(500).send(err);
       
       if (!user) {
           res.status(401).send({success: false, message: "User with provided username was not found"});
       } else {
          if (user.password !== req.body.password) {
               res.status(401).send({success: false, message: "Incorrect password"});
          } else /*if a user is found and the passwords match*/ {
              var token = jwt.sign(user._doc, config.secret); /*creates a new token, first parameter is the payload-- the data sent with the token. The second parameter is the secret.you can set an optional third token for when the object expres.  */
              res.send ( { success: true, token: token, message: "Here's your token!" }); /*you could also just send the token back*/
          } 
       }
   }); 
});

//////SIGNUP//////

authRouter.post("/signup", function( req, res ) {
    /*check that the user name isn't already taken*/
    User.findOne({ username: req.body.username }, function(err, existingUser){
        if (err) res.status(500).send(err);
        if(existingUser) res.send({ success: false, message: "That username is already taken" });
        else {
            var newUser = new User(req.body);
            newUser.save(function(err, user){
                if (err) res.status(500).send(err);
                else res.send({ success: true, message: "Successfully created new user" })
            });
        }
    });
});

module.exports = authRouter;