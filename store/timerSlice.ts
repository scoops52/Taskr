import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface Timer {
    duration: number;
    timeRemaining: number;
    isRunning: boolean;
}

const initialState: Timer = {
    duration: 0,
    timeRemaining: 0,
    isRunning: false
}

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setDuration: (state, action: PayloadAction<number> ) => {
            state.duration = action.payload;
        },
        startTimer: (state) => {
            state.isRunning = true;
        },
        stopTimer: (state) => {
            state.isRunning = false;
        },
        countdownTimer: (state) => {
            state.timeRemaining -= 1;
        },
    }
});

export const { setDuration, startTimer, stopTimer, countdownTimer } = timerSlice.actions;
export default timerSlice.reducer;