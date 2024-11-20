const fs = require("fs")
const http = require('http')

http.createServer((req, res)=>{
    fs.rename('mynewfile.txt', 'newfile.txt',(err)=>{
        console.log("file renamed.")
    })
}).listen(4000)