import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        select: false // to not send with any api
    },
    bio:{
        type: String,
    },
    profilePic:{
        type: String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s"
    },
    public_id:{
        type:String,
    },
    followers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        threads:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "post"
        }],
        replies:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "comment"
        }],
        reposts:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "post"
        }]
    }],
    following:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }],


},{
    timestamps: true
});

module.exports = mongoose.model("user", userSchema);