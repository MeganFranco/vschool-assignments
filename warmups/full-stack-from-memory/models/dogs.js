var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dogSchema = new Schema({
    name: String,
    breed: String,
    height: Number,
    weight: Number,
    fixed: Boolean,
});

module.exports = mongoose.model("Dog", dogSchema);