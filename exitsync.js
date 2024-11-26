// it perform in synchronous way (one by one) operation

const { log } = require('console');
const fs = require ('fs')
const http = require('http')

http.createServer((req, res)=>{
    console.log('server created' );

     
    // let fileexist =fs.existsSync('info.txt')
    // console.log("file is available:", fileexist);

    // fileexist = fs.existsSync("inf.txt")
    // console.log("file is available:", fileexist);



    // to check all files in the folders

    function getcurrentfilenames(){
        console.log("current file names are:")
        fs.readdirSync(__dirname).forEach(file=>{
            console.log(file)
        })
        console.log("\n")
    }getcurrentfilenames()


    
}).listen(4000)