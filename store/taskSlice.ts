import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    id?: number;
    name: string;
    isActive: boolean;
    isOver: boolean;
    startTime?: number;
    endTime?: number;
}

const initialState: InitialState = {
    name: '',
    isActive: false,
    isOver: false,
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        startTask: (state) => {
            state.isActive = true;
        },
        endTask: (state) => {
            state.isOver = true;
            state.isActive = false;
        },
        pauseTask: (state) => {
            state.isActive = false;
        }
    }

});

export const { startTask, endTask, pauseTask } = taskSlice.actions;
export default taskSlice.reducer;