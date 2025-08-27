import socket from "./socket";
import React, { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCycle, updateDecrees, updateGameStatus, updateTerritories, updateTurn } from "./redux/gameStateSlice/GameStateSlice";
import { setUsers } from "./redux/usersSlice/UsersSlice";
import { setVotingStatus } from "./redux/votingSlice/VotingSlice";

const SocketContext = createContext(socket);

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
    const dispatch = useDispatch();

    const votingStatus = useSelector((state) => state.voting.votingStatus)

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

    const handleDecrees = (decrees) => {
        dispatch(updateDecrees(decrees))
    }

    const handleVotingStatus = () => {
      dispatch(setVotingStatus(!votingStatus));
    };

    const handleDecreesListToVote = (list) => {
      dispatch(setDecreesListToVote(list));
    };

    const handleStartVoting = (decree) => {
      dispatch(setDecreeUnderVote(decree));
    };

    const handleSuccessfulDecree = (decree) => {
      dispatch(setDecreeStatus(true));
      dispatch(setDecreeUnderVote(decree));
    };

    const handleDefeatedDecree = (decree) => {
      dispatch(setDecreeStatus(false));
      dispatch(setDecreeUnderVote(decree));
    };

    socket.on("update_turn", handleUpdateTurn);
    socket.on("receive_userList", handleUserList);
    socket.on("server_start_game", handleStartGame);
    socket.on("turn_and_cycle", handleTurnAndCycle);
    socket.on("receive_territories_data", handleTerritoriesData)
    socket.on("send_current_decrees", handleDecrees)
    socket.on("handle_voting_status", handleVotingStatus);
    socket.on("send_decrees_list_to_vote", handleDecreesListToVote);
    socket.on("start_voting", handleStartVoting);
    socket.on("successful_decree", handleSuccessfulDecree);
    socket.on("defeated_decree", handleDefeatedDecree);

    return () => {
      socket.off("update_turn");
      socket.off("receive_userList");
      socket.off("server_start_game");
      socket.off("turn_and_cycle");
      socket.off("receive_territories_data")
      socket.off("send_current_decrees")
      socket.off("handle_voting_status", handleVotingStatus);
      socket.off("send_decrees_list_to_vote", handleDecreesListToVote);
      socket.off("start_voting", handleStartVoting);
      socket.off("successful_decree", handleSuccessfulDecree);
      socket.off("defeated_decree", handleDefeatedDecree);
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