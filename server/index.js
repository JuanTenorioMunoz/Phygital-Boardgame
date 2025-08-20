import express from "express";
import characters from "./db/characters.js"; 
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import shuffleArray from "./utils.js";
import {territoriesBenefits, territoriesName} from "./db/territories.js";


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
let territories = [];

let workerPrice = 600;
let registerPrice = 200;

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
    territories = setTerritoriesValues();
    turnNumber = 1;
    cycleNumber = 1;
    io.emit("server_start_game")
    console.log("start game")
}

const handleGameState = () => {
    if (turnNumber <= users.size) {
    turnNumber++;
  } else {
    turnNumber = 1;
    cycleNumber++;
  }

  io.emit("turn_and_cycle", {turnNumber, cycleNumber})
}

const setTerritoriesValues = () => {
    const randomTerritoriesValues = territoriesBenefits;
    const territoriesToAssign = territoriesName;
    const shuffledTerritories = shuffleArray(randomTerritoriesValues);
    
    const finishedTerritories = territoriesToAssign.map((territory, index) => ({
        ...territory,
        ...shuffledTerritories[index],
    }))

    console.log(finishedTerritories, "frini")
    return finishedTerritories;
}

const getTerritoriesIncome = (username) => {
    const foundUser = findUserByCharacterName(username)
    const territories = foundUser.territories
    const territoriesCodes = territories.forEach(getTerritoryIncome())
}

const getTerritoryIncome = (id) => {
    const territory = findTerritoryByCode(id);
    const netIncome = territory.credits;
    const tenants = territory.players.size
    const realincome = netIncome/tenants;
    return realincome;
}

const findUserByCharacterName = (username) => {
    return users.find(user => user.characterName = username)
}

const findTerritoryByCode = (code) => {
    const territory = territories.find(territory = territory.id === code)
    return territory
}

const setInitialDecrees = () => {

}

const whoseTurnIsIT = () => {
    const userWithTurnIs = users.find(users.find(u => u.status === active))
    return userWithTurnIs.characterName;
}

const onTurnStart = () => {
    if(cycleNumber === 1){

    } else{
        getTerritoriesIncome(whoseTurnIsIT())
    }
}

const onCycleStart = () => {

}

io.on("connection", (socket) => {   
    console.log("user connected: ", socket.id)

    socket.on("request_userList", () => handleRequestUserList(socket));
    socket.on("update_character_status", handleUpdateCharacterStatus);
    socket.on("client_start_game", handleGameStart)
    socket.on("finish_turn", handleGameState)
}
)

server.listen(3001, () => {
    console.log("server running")
})