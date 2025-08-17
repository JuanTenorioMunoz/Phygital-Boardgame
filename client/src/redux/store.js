import {configureStore} from '@reduxjs/toolkit'
import turnReducer from "./turnSlice/TurnSlice";
import usersReducer from "./usersSlice/UsersSlice"

const store = configureStore({
    reducer: {
        turn: turnReducer,
        users: usersReducer,
    }
})

export default store