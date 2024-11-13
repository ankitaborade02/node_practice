// to create api 
const express = require ("express")
const app = express()

// mongoose code 
const mongoose = require ('mongoose')

// to handle express data in mongoDB json added 
app.use(express.json())

// route import 
const router = require('./route')

// middleware 
app.use("/user", router)
const env = require("dotenv")

// to use logic of this file into another
env.config()
const postRoute = require('./verify')
app.use("./authorisedUser", postRoute)

mongoose.connect(process.env.DB_connection)
.then(()=>{
    console.log("connection created");
})
.catch((err)=>{
    console.error(err);
})
app.listen(5000);
