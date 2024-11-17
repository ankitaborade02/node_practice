const fs = require('fs')
const http = require('http')
const path = require('path')

const targetpath = require('OneDrive')

http.createServer((req,res)=>{
    console.log('server created')



// append file    
    // fs.open('appendfs.js', "r",(err)=>{
    //     if (err) throw err
    //     console.log("file opened sucessfully")
    //     return res.end()
    // })



// open and close file

    // fs.open("example.txt", "a+",(err,file)=>{
    //     if (err){
    //         console.log("error while opening file",err)
    //         return;
    //     }
    //     console.log("file is open for append mode")
        
    //     fs.appendFile(file, "hello",(err)=>{
    //         console.log("append in file");
    //     })

    //     fs.close(file,(err)=>{
    //         console.log('file closed');
    //     })
    // })

// to create directory in same folder

// fs.mkdir(path.join(__dirname, 'test'),(err)=>{
//     if (err){
//         return console.error(err);
//     }
//     console.log("directory created");
// })


// to create directory in another path 

fs.mkdir(targetpath,{recursive:true},(err)=>{
    if (err){
        return console.error(err);
    }
    console.log("directory created");
})

}).listen(4000)
