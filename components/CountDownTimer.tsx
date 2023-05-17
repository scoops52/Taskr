import { useAppDispatch } from '@/store/hooks';
import { countdown, Task } from '@/store/tasksSlice';
import React, { useEffect } from 'react'
import { TaskProps } from './SingleTask';


export interface Timer {
    id: number | undefined;
    isActive: boolean;
    timeRemaining: number;
}
const CountdownTimer = ({ task }: TaskProps) => {
    const dispatch = useAppDispatch();
    const hours = Math.floor(task.timeRemaining / 3600);
    const minutes = Math.floor((task.timeRemaining % 3600) / 60).toString().padStart(2, '0');
    const seconds = Math.floor(task.timeRemaining % 60).toString().padStart(2, '0');
    
    useEffect(() => {
        let intervalId: NodeJS.Timeout | undefined;
        if (task.isActive) {
            intervalId = setInterval(() => {
                dispatch(countdown(task.id));
            }, 1000)
        }
        if (intervalId && task.timeRemaining === 0) {
            clearInterval(intervalId);
        }

        return () => 
        {clearInterval(intervalId)}
    }, [dispatch, task.isActive, task.timeRemaining])


  return (
    <div className={`${task.backgroundColor} relative flex items-center justify-center text-black/50 font-bold h-20 w-20 my-2 mx-auto shadow-lg bg-opacity-50 border-2 border-black/50 rounded-full`}>
        <h2>{hours}</h2>
        <h2>:{minutes}</h2>
        <h2>:{seconds}</h2>
    </div>
  )
}

export default CountdownTimer