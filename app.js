// Importing Express
import express from "express";
import mongoose from "mongoose";

import dotenv from 'dotenv'
dotenv.config()

// import Task from "./models/tasks.js";

// // Simple Routes
// const getTask = async (req, res) => {
//     try {
//         const task = await Task.find({});
//         res.status(200).json(task);
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// }
// const addTask = async (req, res) => {
//     try {
//         const task = await Task.create(req.body)
//         res.status(200).json(task);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message})
//     }
// }



// New Server Instance
const app = express()

// Needed Middle Ware 
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Defining the Port
const PORT = 8008;

mongoose.connect(process.env.URI)
const db = mongoose.connection

db.on("error", (error) => { console.error(error) })
db.once("open", () => { console.log("Connected") })


app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})


// mongoose.
// connect(process.env.URI)
// .then(() => {
//     console.log('connected to MongoDB')
//     app.listen(`${PORT}`, ()=> {
//         console.log(`Node API app is running on port 3000`)
//     });
// }).catch((error) => {
//     console.log(error)
// })