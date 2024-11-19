const route = require('express').Router()


const { verify } = require('crypto')
const verifyToken = require('./verify')
const { title } = require('process')

route.get('/', verifyToken, (req, res)=>{
    res.json({
        post:{
            title: "JWT token",
            description : "this is our first jwt"
        }
    })
})

module.export = route