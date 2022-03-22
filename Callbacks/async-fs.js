fs = require('fs');

function cb(err,data){
    console.log('data:',data);
}

fs.readdir("/Users/enduser/Desktop/Projects",cb)
console.log("Log after reading dir but will print before due to async nature.")