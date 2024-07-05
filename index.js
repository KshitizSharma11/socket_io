const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app);

app.use(express.static(path.resolve('./public')));
app.get('/', async function (req, res) {
    res.sendFile('/public/index.html');
});
server.listen(9000,()=>{
    console.log('listening on port 9000');
});