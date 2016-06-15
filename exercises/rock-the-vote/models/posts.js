var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    description: String,
    votes: Number,
    comments: [String]
});


//var posts = [
//    {
//        title: "",
//        description: "",
//        votes: 0,
//        comments: [],
//        id: uuid.v4(),
//        
//    },
//
//];

module.exports = mongoose.model("Post", postSchema);