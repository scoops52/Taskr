import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import timerReducer from "./timerSlice"
import modalReducer from "./modal";

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        timer: timerReducer,
        modal: modalReducer,
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
