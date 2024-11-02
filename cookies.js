const  express = require('express')
const cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

// GET DATA 

app.get('/',function(req,res){
    res.send("hello world..")
})

// OBJECT CREATE 

let user ={
    name: 'john',
    age: 23
}


// SET COOKIE 

app.get('/setuser',function(req,res){
    res.cookie("userData",user)
    res.send("user data added to the cookie")
})


// iteration 

// app.get('/getuser',(req,res)=>{
//     res.send(req.cookies)


// to delete cookie


app.get('/logout',(req,res)=>{
    res.clearCookie('userData')
    res.send("user logout sucessfully")
})
app.listen(4000)



