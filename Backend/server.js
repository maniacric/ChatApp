const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server);

io.on("connection",(socket)=>{
    console.log("what is socket:",socket);
    console.log("Socket is Active to get connected");
    socket.on("chat",(payload)=>{
            console.log("what is payload",payload);
        io.emmit("chat",payload);
    })

})


//app.listen(3000,()=>{console.log("server is up and running at port 3000")});


server.listen(3000,()=>{console.log("server is up and running at port 3000")})