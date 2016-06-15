var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bountySchema = new Schema ({
    firstName: String,
    lastName: String,
    living: Boolean,
    type: String,
    reward: Number,
});

module.exports = mongoose.model("Bounty", bountySchema);




