var fs = require('fs');
var data = {
    "name":"Scotty The Bear",
    "university":"UC Riverside",
    "major":"Mascot"
}

fs.writeFile('scottyData.json',JSON.stringify(data),(err)=>{
    console.log("write finished, erros: ",err);
});