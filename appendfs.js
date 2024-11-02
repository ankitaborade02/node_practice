const fs = require ('fs')
const http = require ('http')

http.createServer((req, res)=>{
    fs.appendFile('index.html', '<h1> this is append file </h1>',(err)=>{
        if(err)throw err
        console.log('file updated');
        return res.end()
    })
}).listen(4000)