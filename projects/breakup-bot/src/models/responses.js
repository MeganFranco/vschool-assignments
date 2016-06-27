var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var responsesSchema = new Schema({
    response: {
        type: String,
        required: true
    },
    timeStamps: {
        type: Date,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Responses", responsesSchema);