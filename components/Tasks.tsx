'use client'
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { Task, clearAllTasks } from "@/store/tasksSlice";
import { toEditorSettings } from "typescript";
import SingleTask from "./SingleTask";
import { useState } from "react";
import ClearAllModal from "./ClearAllModal";
import { openModal } from "@/store/modal";
import EditTask from "./EditTask";
import Modals from "./Modals";


const Tasks = () => {
    const tasks = useAppSelector(state => state.tasks.tasks);
    const modalComponent = useAppSelector(state => state.modal.modalComponent)
    const dispatch = useAppDispatch()

    const handleClearModal = () => {
        dispatch(openModal('ClearAll'));
    }

    return (
        <div className="w-full">
            {tasks.length < 1 && <h1 className="text-lg font-bold text-center">No Tasks</h1>}
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {tasks.map((task: Task) => (
                    <li>
                        <SingleTask key={task.id} task={task} />
                    </li>
                ))}
            </ul>
            <div className="flex justify-center mt-8">
            { tasks.length > 0 && <button onClick={handleClearModal} className="button button-primary">
                Clear All Tasks
            </button>}
            </div>
            { modalComponent && <Modals />}
        </div>
    )
}

export default Tasks