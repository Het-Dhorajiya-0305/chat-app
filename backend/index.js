import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';
import cors from 'cors';
import { addUser, getUser, getUserINRoom, removeUser } from './user.js';
import { users } from './user.js';
import router from './routes.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
});


app.use(cors());
app.use(router);


io.on('connection', (socket) => {

    socket.on('join', ({ name, room }, callback) => {
        console.log(name, room);
        console.log("user connected")
        const { error, user } = addUser({ id: socket.id, name, room })
        console.log(users)
        if (error) {
            return callback(error)
        }
        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.` });
        socket.broadcast.to(user.room).emit("message", { user: "admin", text: `${user.name} has been join!` });

        socket.join(user.room);

        io.to(user.room).emit("roomData", { room: user.room, users: getUserINRoom(user.room) })
        callback();
    })

    socket.on("sendMessage", (message, callback) => {

        const user = getUser(socket.id);
        console.log(user)

        if (user) {
            io.to(user. room).emit("message", { user: user.name, text: message })
        } else {
            "can't send message"
        }
        callback();
    })
    socket.on("disconnect", () => {
        
        const user = removeUser(socket.id)
        console.log("disconnected user removed")        
        console.log(users)
        if (user) {
            io.to(user.room).emit("message", { user: 'admin', text: `${user.name} has left!!` })
            io.to(user.room).emit("roomData", { room: user.room, users: getUserINRoom(user.room) })
        }
    })

})


app.use(express.static(path.resolve('./public')));


server.listen(3000, () => {
    console.log("server is started on port 7009");
})