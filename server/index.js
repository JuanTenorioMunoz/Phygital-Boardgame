import express from "express";
import characters from "./db/characters.js"; 
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import {shuffleArray} from "./utils.js";
import {territoriesBenefits, territoriesName} from "./db/territories.js";
import socket from "../client/src/socket.js";
import { error } from "console";


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

const handleGameState = () => {

    const activeUsers = users.filter(user => user.status === true)
    console.log(activeUsers.length)

    onTurnStart();

    if (turnNumber < activeUsers.length) {
    turnNumber++;
  } else {
    turnNumber = 1;
    cycleNumber++;
  }

  io.emit("turn_and_cycle", {turnNumber, cycleNumber})
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

    console.log("combine", combinedTerritoriesIncome)
    return combinedTerritoriesIncome;
}

const getTerritoryIncome = (id) => {
    const territory = findTerritoryByCode(id);
    const netIncome = territory.credits;
    const tenants = territory.players.length
    const realincome = netIncome/tenants;
    console.log(id, "has this much money", realincome)
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
  const territory = territories.find(t => t.id === Number(code));
  if (!territory) {
    console.error(error);
  }
  return territory;
};

const setPlayerCredits = (username, value) => {
    const foundUser = findUserByCharacterName(username);
    if (!foundUser) {
        console.error(`User not found: "${username}"`);
        return null;
    }

    foundUser.credits = value;
    return foundUser.credits; 
}

const setInitialDecrees = () => {

}

const whoseTurnIsIT = () => {
    const userWithTurnIs = users.find(u => u.turnOrder === turnNumber);
    if(!userWithTurnIs){
      console.error(error);
    }
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
  const foundUser = findUserByCharacterName(user);
  const foundTerritory = findTerritoryByCode(Number(territoryId));

  if (!foundUser || !foundTerritory) {
    console.error("setTerritoryControl: invalid user or territory", { user, territoryId });
    return;
  }

  // --- Update the user's territories ---
  if (foundUser.territories.includes(territoryId)) {
    // Remove control
    foundUser.territories = foundUser.territories.filter(t => t !== territoryId);
  } else {
    // Add control
    foundUser.territories.push(territoryId);
  }

  // --- Update the territory's players ---
  if (foundTerritory.players.includes(user)) {
    foundTerritory.players = foundTerritory.players.filter(u => u !== user);
  } else {
    foundTerritory.players.push(user);
  }

  console.log("Updated territories:", foundUser.characterName, foundUser.territories);

  // Send updated data to clients
  io.emit("receive_territories_data", territories);
  io.emit("receive_userList", users); // so Redux users state updates too
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