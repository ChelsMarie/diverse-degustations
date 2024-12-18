import { configureStore } from "@reduxjs/toolkit";
import themeModeReducer from '../features/mode';

export const store = configureStore({
    reducer: {
        themeMode: themeModeReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;