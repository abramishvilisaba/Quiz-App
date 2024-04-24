import { createSlice } from "@reduxjs/toolkit";

export const resultsSlice = createSlice({
    name: "results",
    initialState: [],
    reducers: {
        updateResults(state, action) {
            return action.payload;
        },
    },
});

export const { updateResults } = resultsSlice.actions;
export default resultsSlice.reducer;
