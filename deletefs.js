const fs = require("fs")
const http = require('http')

http.createServer((req, res)=>{
    fs.unlink('inde.html', (err)=>{
        if(err)throw err
        console.log("file deleted")
        return res.end()
    })
}).listen(4000)