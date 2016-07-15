var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var failSchema = new Schema ({
    title: String,
    description: String,
    date: Date, //or should I just let them add it however they want, 
    //OR just send the current date with Angular to the DB?
    user: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('Failure', failSchema);;