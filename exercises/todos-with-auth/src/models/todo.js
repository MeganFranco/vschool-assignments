var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    completed: {
        type: Boolean,
        default: false
    },
    /*save user Id as a reference on the to-do doc*/
    user: {
        /*when you create to-so objs, make sure the user is in there too*/
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
});

module.exports = mongoose.model("Todo", todoSchema);

/*A one to many relationship*/