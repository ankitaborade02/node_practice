const { string } = require('joi')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    mobile : {
        type: Number,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default : Date.now()
    }
})

// export to 
module.exports = mongoose.model("UserInfo", userSchema)
