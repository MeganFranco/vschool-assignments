var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var tagSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
        }
    ]
})

//one to Many embeded
var practiceSchemaOne = new Schema({
    username: String,
    _id: Number,
    posts: [
            {
                title: {
                    type: String,
                    required: true,
                },
                content: String,
                dateTime: {
                    type: Date,
                    default: Date.now
                },
                comments: [
                    {
                        content: String,
                        dateTime: {
                            type: Date,
                            default: Date.now
                        },
                }
            ],
                tags: [
                    {
                        //YOUR OBJECT ID REFERENCE
                        type: Schema.Types.ObjectId,
                        ref: "Tag"
                }
            ]

        }
    ]
        //passing in objects to the schema function -- creates a property "Created At" to be used 
}, {
    timestamps: true
});

var practiceSchemaTwo = new Schema({
    username: String,

});

module.exports = mongoose.model("Post", practiceSchema)