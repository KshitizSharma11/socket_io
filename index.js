const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
async function init(){
   
    
    server.listen(9000,()=>{
        console.log('listening on port 4000');
    });
}