const express = require("express").Router()
const route = require('express').Router()

const userModule = require('./module')
// import validation
const { registerValidation, loginValidation } = require('./validation')

// import bcrypt package
const bcrypt = require("bcrypt")

//when we do login need to generate token
const jwt = require("jsonwebtoken")

//register data API
route.post('/register', async (req, res) => {

    //implementing validation
    const { error } = registerValidation(req.body)
    if (error) return res.status(404).send(error.details[0].message);

    //to check emailid exist or not
    const emailExist = await userModule.findOne({ email: req.body.email })
    if (emailExist) return res.status(404).send("email already exists")


    //encryption for password
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password, salt)

    const newUser = new userModule({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: hashpassword
    })
    try {
        const SaveData = await newUser.save()
        res.send(SaveData)
    } catch (error) {
        console.log(error);
    }
})

// login data API
route.post("/login", async (req, res) => {

    // implementing validation for login
    const { error } = loginValidation(req.body)
    if (error) return res.status(404).send(error.details[0].message);


    // for verifying login email with registerd email
    const userExist = await userModule.findOne({ email: req.body.email })
    if (!userExist) return res.status(400).send("Invalid Email id")

    // it compare existed password with new password
    const ispass = await bcrypt.compare(req.body.password, userExist.password)
    if (!ispass) return res.status(400).send("Inavlid Password")

    // for token generation
    const token = jwt.sign({ _id: userExist._id }, process.env.Token_secret)
    res.header('auth-token', token).send(token)


    res.send("Login Sucessfully")
})


// show all data
route.get('/showAllData', async (req, res) => {
    try {
        const showData = await userModule.find()
        res.send(showData)
    } catch (error) {
        console.log(error)
    }
})

// showone data
route.get('/showOne', async (req, res) => {
    const id = req.query.id
    try {
        const showData = await userModule.findById(id)
        res.send(showData)
    } catch (error) {
        console.log(error)
    }
})

//delete
route.delete('/delete', async (req, res) => {
    let id = req.query.id
    try {
        const deleteData = await userModule.findByIdAndDelete(id);
        res.send("deleted data sucessfully");
    } catch (error) {
        console.log(error)
    }
})

//update data through put or post
route.post('/update', async (req, res) => {
    let _id = req.body._id
    try {
        const updateData = await userModule.findByIdAndUpdate(_id, req.body);
        res.send("data updated sucessfully")
    } catch (error) {
        console.log(error)
    }
})



module.exports = route;
