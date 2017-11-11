const path = require("path");
const publicPath = path.join(__dirname+"/../public");
const express = require("express");
const port = process.env.PORT || 4000;
const hbs = require ("hbs");
const socketIO = require("socket.io");
const http = require("http");

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection",(socket)=>{
    console.log("connected");

    socket.on('createMsg',(msg)=>{
        msg['time'] = new Date();
        socket.broadcast.emit("newMsg",msg);
    });

    

    socket.on("disconnect", ()=>{
        console.log("client disconnected");
    });
});


// app.set('views', (publicPath+"/views"));
// app.set('view engine', 'hbs');
// app.get("/", function(req,res){
//     res.render("index.hbs");
// });
console.log("hello");
server.listen(port, () => console.log(`Listening on ${port} `));