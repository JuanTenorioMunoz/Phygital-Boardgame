import express from "express";
import characters from "./db/characters.js"; 
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import {shuffleArray} from "./utils.js";
import {territoriesBenefits, territoriesName} from "./db/territories.js";
import socket from "../client/src/socket.js";


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

    console.log("OREDER", users)
}

const handleUpdateCharacterStatus = ({ charName, status }) => {
    const user = users.find(u => u.characterName === charName);
    if (user) {
        user.status = status;
        console.log("UPDATED USERCITO", user);
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

    const activeUsers = users.filter(user => user.status === true)
    console.log(activeUsers.length)


    if (turnNumber < activeUsers.length) {
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

    console.log("territories", finishedTerritories)
    return finishedTerritories;
    
}

const getTerritoriesIncome = (username) => {
    const foundUser = findUserByCharacterName(username)
    const territories = foundUser.territories
    const combinedTerritoriesIncome = territories.reduce(
        (sum, t) => sum + getTerritoryIncome(t), 0
    );

    console.log(combinedTerritoriesIncome)
    return combinedTerritoriesIncome;
}

const getTerritoryIncome = (id) => {
    const territory = findTerritoryByCode(id);
    const netIncome = territory.credits;
    const tenants = territory.players.length
    const realincome = netIncome/tenants;
    return realincome;
}

const findUserByCharacterName = (name) => {
  const found = users.find(u => u.characterName === name);
  if (!found) {
    console.error("findUserByCharacterName: No user found for", name);
  }
  return found;
};

const findTerritoryByCode = (code) => {
    const territory = territories.find(t => t.id === code)
    return territory
}

const setPlayerCredits = (username, value) => {
    const foundUser = findUserByCharacterName(username);
    foundUser.credits = value;
}

const setInitialDecrees = () => {

}

const whoseTurnIsIT = () => {
    const userWithTurnIs = users.find(u => u.turnOrder === turnNumber);
    return userWithTurnIs.characterName;
}

const getPlayerCredits = (username) => {
    const founduser = findUserByCharacterName(username);
    return founduser.credits
}

const onTurnStart = () => {
    if(cycleNumber === 1){

    } else{
        const currentPlayer = whoseTurnIsIT()
        const currentCredits = getPlayerCredits(currentPlayer);
        const territoriesIncome = getTerritoriesIncome(currentPlayer);
        const newCredits = setPlayerCredits(currentPlayer, currentCredits + territoriesIncome)
        console.log("NEW CREDTIS", currentPlayer, newCredits)
    }
}

const onCycleStart = () => {

}

const findUserTerritories = (userName) => {
  const foundUser = findUserByCharacterName(userName);
  if (!foundUser) {
    console.error("findUserTerritories: cannot find user", userName);
    return []; 
  }
  return foundUser.territories;
};

const setTerritoryControl = ({ user, territoryId }) => {
  const foundUserTerritories = findUserTerritories(user);
  const foundTerritory = findTerritoryByCode(Number(territoryId)); 

  if (!foundUserTerritories || !foundTerritory) {
    console.error("setTerritoryControl: invalid user or territory", { user, territoryId });
    return;
  }

  if (foundUserTerritories.includes(territoryId)) {
    const filtered = foundUserTerritories.filter(t => t !== territoryId);
    foundUserTerritories.splice(0, foundUserTerritories.length, ...filtered);
  } else {
    foundUserTerritories.push(territoryId);
  }

  if (foundTerritory.players.includes(user)) {
    const filtered = foundTerritory.players.filter(u => u !== user);
    foundTerritory.players.splice(0, foundTerritory.players.length, ...filtered);
  } else {
    foundTerritory.players.push(user);
  }

  console.log("setting control")
  io.emit("receive_territories_data", territories)
};




io.on("connection", (socket) => {   
    console.log("user connected: ", socket.id)

    socket.on("request_userList", () => handleRequestUserList(socket));
    socket.on("update_character_status", handleUpdateCharacterStatus);
    socket.on("client_start_game", handleGameStart)
    socket.on("finish_turn", handleGameState)
    socket.on("set_territory_control", setTerritoryControl)
}
)

server.listen(3001, () => {
    console.log("server running")
})