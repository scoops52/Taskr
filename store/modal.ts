import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { modals, Modal } from "@/Data/modals";
import { TaskId } from "./tasksSlice";



type InitialState = {
    modals: Modal[];
    modalComponent: boolean;
}

const initialState: InitialState = {
    modals: [...modals],
    modalComponent: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<string>) => {
            const modal = state.modals.find((modal) => modal.name === action.payload);
            if (modal) {
                modal.isOpen = true;
                state.modalComponent = true;
            }
        },
        closeModal: (state, action: PayloadAction<string>) => {
            const modal = state.modals.find((modal) => modal.name === action.payload);
            if (modal) {
                modal.isOpen = false;
                state.modalComponent = false;
            }
        },
        setModalTask: (state, action: PayloadAction<{ name: string; taskId: TaskId}>) => {
            const { name, taskId } = action.payload;
            const modal = state.modals.find((modal) => modal.name === name);
            if (modal) {
                modal.taskId = taskId
            }
            
        },
    }
})

export const { openModal, closeModal, setModalTask } = modalSlice.actions;
export default modalSlice.reducer