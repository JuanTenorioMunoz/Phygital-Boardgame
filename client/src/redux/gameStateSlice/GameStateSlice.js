import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    turn: 1,
    cycle: 1,
    status: false, 
    territories: [],
    decrees: [],
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
        },
        updateTerritories: (state,action) => {
            state.territories = action.payload
        },
        updateDecrees: (state,action) => {
            state.decrees = action.payload
        }
    }
})

export const {updateTurn, updateCycle, updateGameStatus, updateTerritories, updateDecrees} = gameStateSlice.actions;
export default gameStateSlice.reducer;