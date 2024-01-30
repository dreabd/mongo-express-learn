// Importing Express
import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

// Simple Routes
// const getTask = (req, res) => {
//     console.log("In Get Task...........")
//     client.connect((err) => {
//         if (err) {
//             res.status(500).send(err)
//             return
//         }
//         const collection = client.db("Task").collection("Tasks");
//         collection.find().toArray((err, res) => {
//             if (err) res.status(500).send(err)
//             if (res) res.json(res)
//             console.log(res)
//             client.close()
//         })
//     })
// }
// const addTask = (req, res) => {
//     console.log("In Add Task...........")
//     client.connect((err) => {
//         if (err) {
//             res.status(500).send(err)
//             return
//         }
//         const task = req.body
//         const collection = client.db("Task").collection("Tasks");
//         collection.insertOne(task, (err, res) => {
//             if (err) res.status(500).send(err)
//             if (res) res.json(res)
//             console.log("Finished.....")
//             client.close()
//         })
//     })
// }

// New Server Instance
const app = express()

// Routes
// app.get("/tasks", getTask)
// app.post('/tasks', addTask)

// Defining the Port
const PORT = 8008;

mongoose.connect(process.env.URI)
const db = mongoose.connection

db.on("error",(error)=>{console.error(error)})
db.once("open",()=>{console.log("Connected")})


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