import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    // kisne 
    admin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    // kispe 
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
    },
    // kya bola
    text:{
        type: String,
        required: true,
    },


},{
    timestamps: true
});

module.exports = mongoose.model("comment", commentSchema);