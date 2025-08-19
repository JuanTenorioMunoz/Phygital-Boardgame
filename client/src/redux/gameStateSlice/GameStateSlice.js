import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    turn: 1,
    cycle: 1,
    status: false,
}

const gameStateSlice = createSlice({
    name:'gameState',
    initialState,
    reducers: {
        updateTurn: (state, action) => {
            state.turn = action.payload
        },
        updateCycle: (state, action) => {
            state.cycle = action.payload
        },
        updateGameStatus: (state, action) => {
            state.status = action.payload
        }
    }
})

export const {updateTurn, updateCycle, updateGameStatus} = gameStateSlice.actions;
export default gameStateSlice.reducer;