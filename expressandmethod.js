
// to create api 

const express = require ("express")
const app = express()

// mongoose code 

const mongoose = require ('mongoose')

// to handle express data in mongoDB json added 
app.use(express.json())

mongoose.connect('mongodb+srv://ankita:ankita02@cluster0.rl4mv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("connection created");
})
.catch((err)=>{
    console.error(err);
})
app.listen(4000);


// to create middleware

// app.use(express.static('public'))

//1. GET METHOD 

// app.get('/',(req, res)=>{
//     res.send("hello world...")


// app.get('/about',(req,res)=>{
//    res.send('hello world')


//2. POST METHOD

// app.post('/about', (req,res)=>{
//     res.send("hello")
// }).listen(4000)


