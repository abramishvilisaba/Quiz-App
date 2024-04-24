import { createSlice } from "@reduxjs/toolkit";

export const questionsSlice = createSlice({
    name: "questions",
    initialState: [],
    reducers: {
        updateQuestions(state, action) {
            return action.payload;
        },
    },
});

export const { updateQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
