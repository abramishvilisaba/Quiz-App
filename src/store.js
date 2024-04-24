import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { settingsSlice } from "./slices/settingsSlice";
import { questionsSlice } from "./slices/questionsSlice";
import { resultsSlice } from "./slices/resultsSlice";
import { statisticsSlice } from "./slices/statisticsSlice";

const rootReducer = combineReducers({
    settings: settingsSlice.reducer,
    questions: questionsSlice.reducer,
    results: resultsSlice.reducer,
    statistics: statisticsSlice.reducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["statistics"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
