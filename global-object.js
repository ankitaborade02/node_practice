// 1. __dirname
// 2. __filename
// 3. settimeout
// 4. setinterval
// 5. cleartimeout
// 6. console
// 7. process

const { send } = require("process");

// 1.
      console.log(__dirname);
// 2.
    console.log(__filename);
// 3.
     function time(){
        console.log('hello world.. ');
    }
    setTimeout(time, 2000);

// 4.
function interval(){
    console.log("hello world...!!!")
}
setInterval(interval, 3000);


// 5.
function timeout(){
    console.log("hii! how are you..")
}
var t = setTimeout(timeout, 2000)
clearTimeout(t);