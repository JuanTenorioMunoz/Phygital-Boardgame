import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    votingStatus: false,
    decreeUnderVote: "",
    decreeStatus: false,
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
            state.decreesListToVote = action.payload
        },
        setVotesInFavor: (state, action) => {
            state.votesInFavor = action.payload
        },
        setVotesAgainst: (state, action) => {
            state.votesAgainst = action.payload
        },
        setVotingStatus: (state, action) => {
            state.votingStatus= action.payload
        },
        setDecreeStatus: (state,action) => {
            state.decreeStatus = action.payload
        }
    }
})

export const {setVotingStatus, setDecreeUnderVote, setDecreesListToVote, setVotesAgainst, setVotesInFavor} = votingSlice.actions;
export default votingSlice.reducer;