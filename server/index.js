import express from "express";
import characters from "./db/characters.js"; 
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();


app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    }
})

let users = characters;
let playerOrder = [];
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

const handleGameStart = () => {
    io.emit("server_start_game")
    console.log("start game")
}

io.on("connection", (socket) => {   
    console.log("user connected: ", socket.id)

    socket.on("request_userList", () => handleRequestUserList(socket));
    socket.on("update_character_status", handleUpdateCharacterStatus);
    socket.on("client_start_game", handleGameStart)
}
)

server.listen(3001, () => {
    console.log("server running")
})