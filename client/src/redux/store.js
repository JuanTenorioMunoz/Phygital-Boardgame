import {configureStore} from '@reduxjs/toolkit'
import turnReducer from "./turnSlice/TurnSlice";
import usersReducer from "./usersSlice/UsersSlice"
import playerReducer from "./playerSlice/playerSlice"

const store = configureStore({
    reducer: {
        turn: turnReducer,
        users: usersReducer,
        player: playerReducer,
    }
})

export default store