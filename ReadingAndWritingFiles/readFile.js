var fs = require('fs');

// importing file
var data = require('./data.json');
console.log(data.university);

// Using file system
fs.readFile('./data.json','utf8',(err,data)=>{
    var data = JSON.parse(data);
    console.log(data.university);
})