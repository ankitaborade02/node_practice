const jwt = require('jsonwebtoken')

module.exports=(req, res, next)=>{
    const token = req.header('auth-token')
    // error if token not generated
    if(!token) return res.status(401).send("Acess  Denied")

        try{
            const verified = jwt.verify(token, process.env.Token_secret)
            res.userExist = jwt.verified
            next()
        }catch(error){
             res.status(400).send("Invali Token")
        }
}