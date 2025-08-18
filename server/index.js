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
    {characterName: "Veyra Korr", status: false, credits: 800, territories: []},
    {characterName: "Dravik Holt", status: false, credits: 800, territories: []},
    {characterName: "Selene Veyth", status: false, credits: 800, territories: []},
    {characterName: "Kael Orion", status: false, credits: 800, territories: []},
    {characterName: "Morganna Flux", status: false, credits: 800, territories: []},
    {characterName: "Zerax Kane", status: false, credits: 800, territories: []},
]

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