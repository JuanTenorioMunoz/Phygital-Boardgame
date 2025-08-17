import { createSlice } from "@reduxjs/toolkit";

const turnSlice = createSlice({
    name:'turn',
    initialState: 1,
    reducers: {
        updateTurn: (state, action) => {
            state = action.payload
        }
    }
})

export const updateTurn = turnSlice.actions;
export default turnSlice.reducer;