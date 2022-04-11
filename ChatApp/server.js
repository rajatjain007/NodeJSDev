var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
const { sendStatus } = require('express/lib/response');
require('dotenv').config();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

mongoose.Promise = Promise;
var dbUrl = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster1.xjmhk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// Message
var Message = mongoose.model('Message',{
    name:String,
    message:String
})

var messages = []
//Gettting messages
app.get('/messages',(req,res)=>{
    Message.find({},(err,messages)=>{
        if(err){
            sendStatus(500);
        }
        res.send(messages);
    })
})

//Posting messages
app.post('/messages',async (req,res)=>{
    var message = new Message(req.body)

    var savedMessage = await message.save();
    console.log('saved');
    var censored = await Message.findOne({message:'badword'})
    if(censored){
        await Message.deleteOne({_id:censored._id})
    }
    else{
        io.emit('message',req.body);
    }

    //messages.push(req.body);
    // res.sendStatus(200);
    // .catch((err)=>{
    //     res.sendStatus(500);
    //     return console.error(err)
    // })
})


io.on('connection',(socket)=>{
    console.log("user connected...");
})

mongoose.connect(dbUrl,(err)=>{
    console.log('MongoDB error:',err);
})

var server = http.listen(3000,()=>{
    console.log('Server listening on port',server.address().port);
});