// Importing Express
import express from "express";
import mongoose from "mongoose";

import dotenv from 'dotenv'
dotenv.config()

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
