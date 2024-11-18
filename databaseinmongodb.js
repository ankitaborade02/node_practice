// creating database in mongodb 
var mango = require("mongodb")
const mongoose = require('mongoose')

const mongurl = "mongodb+srv://ankita:ankita02@cluster0.rl4mv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongurl)

// default connection 
const db = mongoose.connection;

// bind for error event 

db.on('error',console.error.bind(console, 'mongoDb error'))

db.once('open', ()=>{
    console.log('connection created');
    db.createCollection('mydatabase', (err, result)=>{
        if(err){
            console.error("Error while creating collection");
        }else{
            console.log('database is created');
        }
        mongoose.connection.close()
})

})