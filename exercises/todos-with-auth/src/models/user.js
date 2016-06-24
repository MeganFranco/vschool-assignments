var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

var userSchema = new Schema({
    name: String,
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        default: false
    }
});

//setting up a hook --> things like a pre-save hook and a post-save hook

userSchema.pre("save", function (next) {
    var user = this;
    if (!user.isModified("password")) {
        return next(); //I only care if the user password is modified... if it hasn't been, keep doing your thing
    } else {
        //hash the password
        bcrypt.hash(user.password, 10, function (err, hash) {
            if (err) return next(err); //pass on to the next middleware function
            user.password = hash;
            next();
        });
    }
});

userSchema.methods.withoutPassword = function () {
    var user = this.toObject();
    delete user.password;
    return user;
    
}

module.exports = mongoose.model("User", userSchema)