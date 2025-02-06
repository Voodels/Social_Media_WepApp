import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    admin:{
        // used to link a document to another 
        // for ex linking a post model to a user model
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    text:{
        type: String,
        required: true,
    },
    media:{
        type: String,
    },  
    public_id:{
        type: String,
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }]

},{
    timestamps: true
});

module.exports = mongoose.model("post", postSchema);