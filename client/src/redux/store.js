import {configureStore} from '@reduxjs/toolkit'
import gameStateReducer from "./gameStateSlice/GameStateSlice";
import usersReducer from "./usersSlice/UsersSlice"
import playerReducer from "./playerSlice/playerSlice"
import votingReducer from "./votingSlice/VotingSlice"

const store = configureStore({
    reducer: {
        gameState: gameStateReducer,
        users: usersReducer,
        player: playerReducer,
        voting: votingReducer,
    }
})

export default store