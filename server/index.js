import express from "express";
import characters from "./db/characters.js"; 
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import shuffleArray from "./utils.js";

const app = express();


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

const definePlayerOrder = () => {
    const activeUsers = users.filter(u => u.status === true);
    const turnNumbers = activeUsers.map((_, index) => index + 1)
    const shuffledNumbers = shuffleArray(turnNumbers);

    let turnIndex = 0;

    users.forEach(user => {
        if(user.status){
            user.turnOrder = shuffledNumbers[turnIndex]
            turnIndex++;
        } else {
            user.turnOrder = ""
        }
    })
}

const handleUpdateCharacterStatus = ({ charName, status }) => {
    const user = users.find(u => u.characterName === charName);
    if (user) {
        user.status = status;
    }

    io.emit("receive_userList", users);
};

const handleGameStart = () => {
    definePlayerOrder();
    turnNumber = 1;
    io.emit("server_start_game")
    console.log("start game")
}

const onTurnStart = () => {

}

const onCycleStart = () => {
    
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