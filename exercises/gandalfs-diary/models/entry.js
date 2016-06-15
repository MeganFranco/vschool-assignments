var mongoose = require('mongoose');
//mongoose.connect('localhost', 'gandalfs-diary');
var Schema = mongoose.Schema;

var entrySchema = new Schema({
    content: {
        type: String,
        required: true,
        
    }
});

module.exports = mongoose.model("Entry", entrySchema)