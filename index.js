const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app);
const {Server} = require("socket.io");
app.use(express.static(path.resolve('./public')));

const io = new Server(server);

io.on('connection', (socket)=>{
    socket.on('message',(msg)=>{
        io.emit('message',msg);
    });
    console.log('a new user connected : ', socket.id)

});

app.get('/', async function (req, res) {
    res.sendFile('/public/index.html');
});
server.listen(9000,()=>{
    console.log('listening on port 9000');
});