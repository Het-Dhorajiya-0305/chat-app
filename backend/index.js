import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000"
    }
});



io.on('connection', (socket) => {
    Console.log("new user has been connected");
    socket.on("disconnection", () => {
        console.log("user has been disconnected")
    })
})
app.use(cors());
app.use(express.static(path.resolve('./public')));
app.get("/", (req, res) => {
    res.sendFile("./public/index.html")
        ;
})

server.listen(3000, () => {
    console.log("server is started on port 3000");
})