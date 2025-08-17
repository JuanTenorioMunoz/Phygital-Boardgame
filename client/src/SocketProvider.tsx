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

    socket.on("update_turn", (data) => {
      dispatch(updateTurn(data));
    });

    return () => {
      socket.off("update_turn");
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