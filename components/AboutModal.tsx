import { useAppDispatch } from '@/store/hooks'
import { closeModal } from '@/store/modal';
import React from 'react'

const AboutModal = () => {
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(closeModal('About'))
    }
  return (
    <div className="flex flex-col gap-5 bg-white p-5 rounded w-full md:w-2/3">
        <button onClick={handleClose} className="text-right text-xlg">X</button>
        <h1 className="text-lg font-bold text-center">About this App</h1>
        <p>Scheduling your day can be tough. You might plan on working on a project from 9-11am, or practicing guitar from 6-7pm. But unfortunately for a lot of people, life gets in the way. Emails come in, people call, your doordash driver gets lost. Taskr is a way to make sure you get the work done no matter how hectic your schedule becomes. By setting a designated amount of time for a task, instead of just a designated time, you can make sure that progress gets done. And consistent progress leads to results. </p>
        <h1 className="text-lg font-bold text-center">How does it work?</h1>
        <p>Simply create a task that you want to work on and set the amount of time you would like to put into that task today. When you are working on the task, you start the timer. You can pause the timer whenever you need in order to take care of whatever life throws at you. When you can, you return to the task and start the timer again. And for those of you who still like to plan ahead when they can, whenever you start thet timer for a task, it will let you know what time your task will end. Happy tasking!</p>
    </div>
  )
}

export default AboutModal