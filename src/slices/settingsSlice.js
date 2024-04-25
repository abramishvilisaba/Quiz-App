import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        category: { id: 9, name: "General Knowledge" },
        numberOfQuestions: 5,
        difficulty: "easy",
        type: "",
        time: "5m",
    },
    reducers: {
        updateSettings(state, action) {
            return { ...state, ...action.payload };
        },
    },
});

export const { updateSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
