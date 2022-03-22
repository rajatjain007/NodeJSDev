fs = require('fs');

data = fs.readdirSync("/Users/enduser/Desktop/Projects");
console.log('data:',data);
console.log("Logging after reading directory");