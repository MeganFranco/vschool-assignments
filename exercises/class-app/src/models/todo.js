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
    }
});

module.exports = mongoose.model("Todo", todoSchema)