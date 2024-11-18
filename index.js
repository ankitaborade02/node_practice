const url = require ('url')
var adr = 'https://in.bookmyshow.com/explore/home/pune'
var q = url.parse(adr, true)
console.log('host name is:', q.host);
console.log('path name is:',q.path);