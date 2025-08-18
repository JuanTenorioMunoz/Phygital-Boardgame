import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name:'player',
    initialState: "",
    reducers: {
        updatePlayer: (state, action) => {
            return action.payload
        }
    }
})

export const {updatePlayer} = playerSlice.actions;
export default playerSlice.reducer;