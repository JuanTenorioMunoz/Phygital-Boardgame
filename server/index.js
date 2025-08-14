const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io")
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    }
})

let users = [
    {username: "Alonso"},
]

io.on("connection", (socket) => {   
    console.log("user connected: ", socket.id)

    socket.on("send_username", (data) => {
        users.push(data)
        io.emit("receive_userList", users)
    })

    socket.on("request_userList", (data) => {
        socket.emit("receive_userList", users)
    })
}
)


server.listen(3001, () => {
    console.log("server running")
})