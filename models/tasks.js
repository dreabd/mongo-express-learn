import mongoose from "mongoose";

// Model
const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter a Task Name"]
    },
    priority: {
        type: Number,
        required: true,
        default: 0,
        
    },
})

const Task = mongoose.model('Task', taskSchema);

export default Task