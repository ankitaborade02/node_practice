const fs = require("fs")
const http = require('http')

http.createServer((req, res)=>{
   fs.readFile('index.html', (err, data)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write(data)
    return res.end()
   })
}).listen(4000)