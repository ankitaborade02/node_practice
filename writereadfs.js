const { log } = require('console')
const fs = require('fs')
const http = require('http')

http.createServer((req, res)=>{
    console.log('server created');
    console.log("writing into file");

    fs.writeFile('input.txt', "hello good morning this is write file", (err)=>{
        if (err) {
            return console.error(err);
        }
        console.log("file written successfully");
        console.log("lets read file")

        fs.readFile('input.txt', (err, data)=>{
            if (err){
                return console.error(err);
            } 
            console.log(data.toString());
        })
    })
}).listen(4000)