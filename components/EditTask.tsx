'use client'
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { createTask, editTask } from '@/store/tasksSlice';
import { setSyntheticLeadingComments } from 'typescript';
import TaskColor from './TaskColor';
import { GrAddCircle } from 'react-icons/gr'
import { BsCircleFill } from 'react-icons/bs'
import { TaskProps } from './SingleTask';
import { Task } from '@/store/tasksSlice';
import { closeModal } from '@/store/modal';




const EditTask = () => {
    const modals = useAppSelector(state => state.modal.modals);
    const modal = modals.find((modal) => modal.name === 'EditTask')
    const task = useAppSelector(state => state.tasks.tasks.find((task) => task.id === modal?.taskId));

    const initialHours = task ? Math.floor(task.duration / 60 ) : 0;
    const initialMinutes = task ? Math.floor(task.duration % 60 ) : 0;

    const [name, setName] = useState(task?.name || '');
    const [hours, setHours] = useState(initialHours);
    const [minutes, setMinutes] = useState(initialMinutes);
    const [backgroundColor, setBackgroundColor] = useState(task?.backgroundColor || 'bg-white');
    const [outlineColor, setOutlineColor] = useState(task?.outlineColor || 'outline outline-4 outline-black' )
    
    const dispatch = useAppDispatch();

    const duration = (hours * 60) + minutes;

    const updatedTask = {
                id: task?.id,
                name,
                duration,
                isActive: false,
                timeRemaining: duration * 60,
                endTime: 0,
                backgroundColor,
                outlineColor,
    };
    const handleEdit = (updatedTask: Task) => {
        dispatch(editTask(updatedTask));
        dispatch(closeModal('EditTask'));
    }

    
    const handleClose = () => dispatch(closeModal('EditTask'));

    return (
        <form onSubmit={() => handleEdit(updatedTask)} className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-1/3">
            <div className="mb-4">
                <h1 className="text-lg font-bold text-center">Create a Task</h1>
            </div>
            <div className="mb-4">
                <label htmlFor='name' className="label">
                    Task:
                </label>
                <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={(e) => e.target.value ? setName(e.target.value) : setName('Task')}
                    className="input"
                    placeholder='Task Name'
                />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor='duration' className="label">Duration:</label>
                    <input
                        type='number'
                        min='0'
                        value={hours}
                        onChange={(e) => e.target.value ? setHours(parseInt(e.target.value)) : setHours(0)}
                        placeholder='Hours'
                        className="input"
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label htmlFor='duration' className="label opacity-0">Minutes</label>
                    <input
                        type='number'
                        min='0'
                        value={minutes}
                        onChange={(e) => e.target.value ? setMinutes(parseInt(e.target.value)) : setMinutes(0)}
                        placeholder="Minutes"
                        className="input"
                    />
                </div>
                {/* {emptyDuration && <p className="text-red-500 text-xs italic mt-3 mx-3">Please Set A Duration</p>} */}
            </div>
            <div className="mb-6">
                <label htmlFor='duration' className="label">Task Color</label>
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                    <li>
                        <button 
                            onClick={() => {
                            setBackgroundColor('bg-fuchsia-600');
                            setOutlineColor('outline outline-4 outline-fuchsia-800');
                            }}
                             className="bg-fuchsia-600 h-5 w-5 border-2 border-fuchsia-800 rounded-full" type='button'></button>
                    </li>
                    <li>
                        <button 
                            onClick={() => {
                            setBackgroundColor('bg-cyan-600');
                            setOutlineColor('outline outline-4 outline-cyan-800');
                            }} 
                            className="bg-cyan-600 h-5 w-5 border-2 border-cyan-800 rounded-full" type='button'></button>
                    </li>
                    <li>
                        <button 
                        onClick={() => {
                            setBackgroundColor('bg-emerald-600');
                            setOutlineColor('outline outline-4 outline-emerald-800');
                            }} 
                        className="bg-emerald-600 h-5 w-5 border-2 border-emerald-800 rounded-full" type='button'></button>
                    </li>
                    <li>
                        <button 
                            onClick={() => {
                            setBackgroundColor('bg-orange-600');
                            setOutlineColor('outline outline-4 outline-orange-800');
                            }}
                             className="bg-orange-500 h-5 w-5 border-2 border-orange-800 rounded-full" type='button'></button>
                    </li>
                </ul>
            </div>
            
            <div className="flex justify-center gap-4 mt-5 w-full">
                <button className="button button-primary w-full flex justify-center gap-3 items-center">
                    Update Task
                </button>
                <button onClick={handleClose} type="button" className="button button-primary w-full flex justify-center gap-3 items-center">
                    Cancel
                </button>
            </div>
        </form>

    )
}

export default EditTask