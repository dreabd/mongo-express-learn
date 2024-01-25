// Importing Express
import express from "express";
import { client } from "./dbconnect.js"
require('dotenv').config();
import mongoose from "mongoose";

// Simple Routes
const getTask = (req, res) => {
    console.log("In Get Task...........")
    client.connect((err) => {
        if (err) {
            res.status(500).send(err)
            return
        }
        const collection = client.db("Task").collection("Tasks");
        collection.find().toArray((err, res) => {
            if (err) res.status(500).send(err)
            if (res) res.json(res)
            console.log(res)
            client.close()
        })
    })
}
const addTask = (req, res) => {
    console.log("In Add Task...........")
    client.connect((err) => {
        if (err) {
            res.status(500).send(err)
            return
        }
        const task = req.body
        const collection = client.db("Task").collection("Tasks");
        collection.insertOne(task, (err, res) => {
            if (err) res.status(500).send(err)
            if (res) res.json(res)
            console.log("Finished.....")
            client.close()
        })
    })
}

// New Server Instance
const app = express()

// Routes
app.get("/tasks", getTask)
app.post('/tasks', addTask)

// Defining the Port
const PORT = 8008;


app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})