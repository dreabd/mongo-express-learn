import mongoose from "mongoose";
import { taskSchema } from "./tasks";

// Model
const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"Please Enter a First Name"]
    },
    lastName:{
        type:String,
        required:[true,"Please Enter a Last Name"]
    },
    email:{
        type:String,
        required:[true,"Please Enter a valid email"],
        unique: true,
        lowercase: true,
        trim: true
    },
    password:{
        type:String,
        required:[true,"Please Enter a valid password"]
    },
    tasks:[taskSchema],
    level:{
        type:Number,
        default:0,
    }
})

const User = mongoose.model('User', userSchema);

export default User