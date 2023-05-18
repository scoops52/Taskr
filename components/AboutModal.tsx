import { useAppDispatch } from '@/store/hooks'
import { closeModal } from '@/store/modal';
import Link from 'next/link';


const AboutModal = () => {
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(closeModal('About'))
    }
  return (
    <div className="flex flex-col gap-5 bg-white text-black p-5 rounded w-full md:w-2/3">
        <button onClick={handleClose} className="text-right text-xlg">X</button>
        <h1 className="text-lg font-bold text-center">About this App</h1>
        <p>Scheduling your day can be tough. There are countless ways to go about setting yourself up for productivity. One such technique that has become popular is the concept of <span className='text-gray-500 underline'><Link href='https://www.betterup.com/blog/time-blocking'>Time Blocking</Link></span>: taking a block of time to focus on one particular task, and only that task for the prescribed amount of time. This improves focus and reduces stress around tasks. The thought of completing a whole project or learning a new skill is daunting, but the idea of 3 hours of focused work on it a day is much more manageable and sustainable, leading to long term success. 
        <br />
        The problem with most Time Blocking apps today is that you still must put these blocks into a daily schedule, with each block running from a designated start time to a designated end time. While this might be helpful to someone with a personal assistant, most people find that daily schedules rarely go to plan. What happens if your dog needs to go out during your time block, or an important phone call comes in? With Taskr, you can simply set the amount of total time you want to spend on a singular task. You can keep track of that time throughout the day, stopping and starting when it is best for you without having to constantly rearrange your schedule. 
        </p>
        <h1 className="text-lg font-bold text-center">How does it work?</h1>
        <p>Simply create a task that you want to work on and set the amount of time you would like to put into that task today. When you are working on the task, you start the timer. You can pause the timer whenever you need in order to take care of whatever life throws at you. When you can, you return to the task and start the timer again. And for those of you who still like to plan ahead when they can, whenever you start the timer for a task, it will let you know what time your task will end. Happy tasking!</p>
    </div>
  )
}

export default AboutModal