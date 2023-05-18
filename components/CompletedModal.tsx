
import { TaskId, addTime, removeTask } from '@/store/tasksSlice';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import React from 'react'
import { closeModal } from '@/store/modal';
import ConfettiComponent from './ConfettiComponent';



const CompletedModal = () => {
    const modals = useAppSelector(state => state.modal.modals);
    const modal = modals.find((modal) => modal.name === 'CompletedTask')
    const task = useAppSelector(state => state.tasks.tasks.find((task) => task.id === modal?.taskId));
    const dispatch = useAppDispatch()

    const handleDone = () => {
        dispatch(removeTask(task?.id));
        dispatch(closeModal('CompletedTask'));
    }
    const handleSnooze = () => {
        dispatch(addTime(task?.id));
        dispatch(closeModal('CompletedTask'));
    }
  return (
    <div className="flex flex-col gap-5 bg-white p-5 rounded text-black">
        <h1 className="text-2xl uppercase text-transparent bg-clip-text bg-gradient-to-r to-fuchsia-600 from-emerald-600">Great Job, You are done!</h1>
        <button onClick={handleDone} className='button button-primary'>Complete Task</button>
        <button onClick={handleSnooze} className='button button-outline'>Add 30 more minutes</button>
        <ConfettiComponent active={true} />
    </div>

  )
}

export default CompletedModal