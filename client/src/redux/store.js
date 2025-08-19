import {configureStore} from '@reduxjs/toolkit'
import gameStateReducer from "./gameStateSlice/GameStateSlice";
import usersReducer from "./usersSlice/UsersSlice"
import playerReducer from "./playerSlice/playerSlice"

const store = configureStore({
    reducer: {
        gameState: gameStateReducer,
        users: usersReducer,
        player: playerReducer,
    }
})

export default store