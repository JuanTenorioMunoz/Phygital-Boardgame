import socket from "./socket";
import React, { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTurn } from "./redux/turnSlice/TurnSlice";

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
        dispatch(updateTurn(data))
    }


    socket.on("update_turn", handleUpdateTurn);
    socket.on("receive_userList", handleUserList);

    return () => {
      socket.off("update_turn");
      socket.off("receive_userList");
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