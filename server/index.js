const express = require("express");
const characters = require("./db/characters");
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

let users = characters;
let turnNumber = 1;
let cycleNumber = 1;
let activeDecrees = [];

const handleRequestUserList = (socket) => {
    socket.emit("receive_userList", users)
}

const handleUpdateCharacterStatus = ({ charName, status }) => {
    const user = users.find(u => u.characterName === charName);
    if (user) {
        user.status = status;
    }

    io.emit("receive_userList", users);
};

io.on("connection", (socket) => {   
    console.log("user connected: ", socket.id)

    socket.on("request_userList", () => handleRequestUserList(socket));
    socket.on("update_character_status", handleUpdateCharacterStatus);
}
)

server.listen(3001, () => {
    console.log("server running")
})