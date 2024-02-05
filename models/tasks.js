import mongoose from "mongoose";

// Model
export const habitSchema = mongoose.Schema({
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
    completed: [],
    archivedAt: {
        type: Date  
    }

})

const Habit = mongoose.model('Habit', habitSchema);

export default Habit

