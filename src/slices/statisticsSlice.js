import { createSlice } from "@reduxjs/toolkit";

export const statisticsSlice = createSlice({
    name: "statistics",
    initialState: {
        questions: 0,
        correct: 0,
        categories: {},
        difficulties: {},
        types: {},
    },
    reducers: {
        updateStatistics(state, action) {
            const { results, questions } = action.payload;
            if (questions.length === 0) return;

            state.questions += questions.length;
            state.correct += Object.values(results).filter((result) => result === "true").length;

            const category = questions[0].category;
            if (!state.categories[category]) {
                state.categories[category] = 0;
            }
            state.categories[category] += questions.length;

            const difficulty = questions[0].difficulty;
            if (!state.difficulties[difficulty]) {
                state.difficulties[difficulty] = 0;
            }
            state.difficulties[difficulty] += questions.length;

            const type = questions[0].type;
            if (!state.types[type]) {
                state.types[type] = 0;
            }
            state.types[type] += questions.length;
        },
    },
});

export const { updateStatistics } = statisticsSlice.actions;
export default statisticsSlice.reducer;
