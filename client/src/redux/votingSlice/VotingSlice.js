import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    decreeUnderVote: "",
    decreesListToVote: "",
    votesInFavor: [],
    votesAgainst: [],
}

const votingSlice = createSlice({
    name:'voting',
    initialState,
    reducers: {
        setDecreeUnderVote: (state, action) => {
            state.decreeUnderVote = action.payload
        },
        setDecreesListToVote: (state, action) => {
            state.decreeUnderVote = action.payload
        },
        setVotesInFavor: (state, action) => {
            state.decreeUnderVote = action.payload
        },
        setVotesAgainst: (state, action) => {
            state.decreeUnderVote = action.payload
        },
    }
})

export const {setDecreeUnderVote, setDecreesListToVote, setVotesAgainst, setVotesInFavor} = votingSlice.actions;
export default votingSlice.reducer;