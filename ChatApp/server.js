var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var messages = [{name:"Rajat",message:"GG"},{name:"Jain",message:"Slaughter Gang!"}]
//Gettting messages
app.get('/messages',(req,res)=>{
    res.send(messages);
})

//Posting messagin
app.post('/messages',(req,res)=>{
    messages.push(req.body);
    res.sendStatus(200);
})


var server = app.listen(3000,()=>{
    console.log('Server listening on port',server.address().port);
});