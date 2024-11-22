const http = require ('http')
const uc = require('uppercase')

http. createServer((req, res)=>{
    console.log("server created");
    res.writeHead(200, {'content-type':'text/html'})
    res.write(uc('<h1> hello world..! </h1>'))
    // res.write(req.url)
    res.end()
}).listen(4000)


