import mongoose from "mongoose";

// Model
export const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Enter a Task Name"]
    },
    details: {
        type: String
    },
    consistencyLevel: {
        type: Number,
        default: 0,
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    completed:[],
    deletedAt:{
        type:Date
    }

})

const Task = mongoose.model('Task', taskSchema);

export default Task

