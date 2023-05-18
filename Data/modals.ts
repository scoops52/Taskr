import { TaskId } from "@/store/tasksSlice";


export interface Modal {
    name: string;
    isOpen: boolean;
    taskId: TaskId;
}

export const modals: Modal[] = [
    {
        name: 'CreateTask',
        isOpen: false,
        taskId: undefined
    },
    {
        name: 'ClearAll',
        isOpen: false,
        taskId: undefined
    },
    {
        name: 'RemoveTask',
        isOpen: false,
        taskId: undefined
    },
    {
        name: 'EditTask',
        isOpen: false,
        taskId: undefined
    },
    {
        name: 'CompletedTask',
        isOpen: false,
        taskId: undefined
    },
    {
        name: 'About',
        isOpen: false,
        taskId: undefined
    },
]