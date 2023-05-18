import React from 'react';
import { useState } from 'react';

import { TaskProps } from './SingleTask';
import { useAppDispatch } from '@/store/hooks';
import { calculateEndTime, startTask, stopTask } from '@/store/tasksSlice';

const TaskToggle = ({ task }: TaskProps) => {
    const [label, setLabel] = useState('Start Task');
    const dispatch = useAppDispatch();

    const handleToggle = () => {
        if (!task.isActive) {
            dispatch(startTask(task.id));
            dispatch(calculateEndTime(task.id))
            setLabel('Stop Task');
        } else {
            dispatch(stopTask(task.id));
            setLabel('Start Task');
        }
    }

  return (
    <button onClick={handleToggle} className={`my-2 ${task.backgroundColor} hover:bg-opacity-50 text-white/50 text-sm font-bold py-2 px-4 rounded-full outline outline-1 outline-offset-1 outline-black/50 md:w-auto`} >
        {label}
    </button>
  )
}

export default TaskToggle