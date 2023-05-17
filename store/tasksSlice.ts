import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { exampleTasks } from "@/Data/exampleTasks";

export type TaskId = number | undefined;

export interface Task {
    id?: TaskId;
    name: string;
    duration: number;
    isActive: boolean;
    timeRemaining: number;
    endTime: number;
    backgroundColor: string;
    outlineColor: string;
}

type InitialState = {
    tasks: Task[]
}

const initialState: InitialState = {
    tasks:[...exampleTasks]
}

const convertTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    return totalSeconds;
}




const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload)
        },
       startTask: (state, action: PayloadAction<TaskId>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.isActive = true;
            };
       },
       countdown: (state, action: PayloadAction<TaskId>) => {
        const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.timeRemaining -= 1;
            };
        },
        stopTask: (state, action: PayloadAction<TaskId>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.isActive = false;
            };
        },
        calculateEndTime: (state, action: PayloadAction<TaskId>) => {
            const currentTime = convertTime();
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.endTime = currentTime + task.timeRemaining;
                console.log(currentTime)
            };
        },
        removeTask: (state, action: PayloadAction<TaskId>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
        editTask: (state, action: PayloadAction<Task>) => {
            const { id, name, duration, isActive, timeRemaining, backgroundColor, outlineColor } = action.payload;
            const task = state.tasks.find((task) => task.id === id)
            if (task) {
                task.name = name;
                task.duration = duration;
                task.isActive = isActive;
                task.backgroundColor = backgroundColor;
                task.outlineColor = outlineColor;
                task.timeRemaining = timeRemaining;

            }
        },
        addTime: (state, action: PayloadAction<TaskId>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.timeRemaining += 1800;
            };
        },
        clearAllTasks: (state) => {
            state.tasks = [];
        }
    }
});

export const { createTask, startTask, countdown, stopTask, calculateEndTime, removeTask, editTask, addTime, clearAllTasks } = tasksSlice.actions;
export default tasksSlice.reducer;