import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        turn: turnReducer,
    }
})

export default store