import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { create } from 'domain';

export interface ThemeModeState {
    mode: 'light' | 'dark';
}

const initialState: ThemeModeState = {
    mode: 'light'
}

const themeModeSlice = createSlice({
    name: 'themeMode',
    initialState,
    reducers: {
        toggleMode(state) {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        }
    }
});

export const { toggleMode } = themeModeSlice.actions;

export default themeModeSlice.reducer;