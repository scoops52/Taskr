'use client'
import { useState } from 'react';
import { useAppDispatch } from '@/store/hooks'
import { createTask } from '@/store/tasksSlice';
import { setSyntheticLeadingComments } from 'typescript';
import TaskColor from './TaskColor';
import { GrAddCircle } from 'react-icons/gr'
import { BsCircleFill } from 'react-icons/bs'



const CreateTask = () => {
    const [name, setName] = useState('');
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('bg-emerald-600');
    const [outlineColor, setOutlineColor] = useState('outline outline-4 outline-emerald-800');
    const [emptyDuration, setEmptyDuration] = useState(false)
    const dispatch = useAppDispatch();

    const duration = (hours * 60) + minutes;

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (hours === 0 && minutes === 0) {
            setEmptyDuration(true);
        } else {
            dispatch(createTask({
                id: Math.floor(Math.random() * 1000000),
                name,
                duration,
                isActive: false,
                timeRemaining: duration * 60,
                endTime: 0,
                backgroundColor,
                outlineColor,
            }));
        }

    }


    return (
        <form onSubmit={handleAdd} className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-full md:w-1/3 lg:w-1/4 xl:w-1/4 h-1/3">
            <div className="mb-4">
                <h1 className="text-lg font-bold text-center">Create a Task</h1>
            </div>
            <div className="mb-4">
                <label htmlFor='name' className="label">
                    Task Name
                </label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    onChange={(e) => e.target.value ? setName(e.target.value) : setName('Task')}
                    className="input"
                    placeholder="Task Name"
                />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor='duration' className="label">Duration</label>
                    <input
                        type='number'
                        min='0'
                        id='hours'
                        onChange={(e) => e.target.value ? setHours(parseInt(e.target.value)) : setHours(0)}
                        placeholder='hours'
                        className="input"
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label htmlFor='duration' className="label opacity-0">Minutes</label>
                    <input
                        type='number'
                        min='0'
                        id='minutes'
                        onChange={(e) => e.target.value ? setMinutes(parseInt(e.target.value)) : setMinutes(0)}
                        placeholder='minutes'
                        className="input"
                    />
                </div>
                {emptyDuration && <p className="text-red-500 text-xs italic mt-3 mx-3">Please Set A Duration</p>}
            </div>
            <div className="mb-6">
                <label htmlFor='duration' className="label">Task Color</label>
                <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
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
            
            <div className="flex justify-center mt-5 w-full">
                <button className="button button-primary w-full flex justify-center gap-3 items-center">
                    Create
                    <GrAddCircle size={20} />
                </button>
            </div>
        </form>

    )
}

export default CreateTask