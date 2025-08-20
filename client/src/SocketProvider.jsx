import socket from "./socket";
import React, { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCycle, updateGameStatus, updateTerritories, updateTurn } from "./redux/gameStateSlice/GameStateSlice";
import { setUsers } from "./redux/usersSlice/UsersSlice";

const SocketContext = createContext(socket);

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
    console.log("sockete", socket.id);

    const handleUpdateTurn = (data) => {
        dispatch(updateTurn(data))
    }

    const handleUserList = (data) => {
        dispatch(setUsers(data))
    }

    const handleStartGame = () => {
        dispatch(updateGameStatus(true))
        console.log("Dispatched boy")
    }

    const handleTurnAndCycle = ({turnNumber, cycleNumber}) => {
        dispatch(updateTurn(turnNumber));
        dispatch(updateCycle(cycleNumber));
    }

    const handleTerritoriesData = (territories) => {
        dispatch(updateTerritories(territories));
        console.log(territories)
    }

    socket.on("update_turn", handleUpdateTurn);
    socket.on("receive_userList", handleUserList);
    socket.on("server_start_game", handleStartGame);
    socket.on("turn_and_cycle", handleTurnAndCycle);
    socket.on("receive_territories_data", handleTerritoriesData)

    return () => {
      socket.off("update_turn");
      socket.off("receive_userList");
      socket.off("server_start_game");
      socket.off("turn_and_cycle");
      socket.off("receive_territories_data")
    };
    }, [dispatch]);

    return(
    <>
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    </>
    );

}

//