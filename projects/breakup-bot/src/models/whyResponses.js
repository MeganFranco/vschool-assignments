var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var whyResponsesSchema = new Schema({
    response: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Whyresponses", whyResponsesSchema);