const fs = require ('fs')
const http = require ('http')

http.createServer((req, res)=>{
    fs.writeFile('mynewfile.txt', "good morning..", (err)=>{
        if (err) throw err
        console.log("file saved")
    })
}).listen(4000)