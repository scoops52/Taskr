'use client'

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { calculateEndTime, startTask, Task, stopTask, removeTask } from "@/store/tasksSlice";
import { openModal, setModalTask } from "@/store/modal";
import CountdownTimer from "./CountDownTimer";
import CompletedModal from "./CompletedModal";
import RemoveTaskModal from "./RemoveTaskModal";
import TaskToggle from "./TaskToggle";
import { FiEdit, FiTrash2 } from "react-icons/fi"
import EditTask from "./EditTask";



export interface TaskProps {
  task: Task
}

const SingleTask = ({ task }: TaskProps) => {
  const modals = useAppSelector(state => state.modal.modals);
  

  const dispatch = useAppDispatch();
  const hours = Math.floor(task.duration / 60);
  const minutes = Math.floor((task.duration % 60));


  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    const currentTime = new Date();


    currentTime.setHours(hours, minutes, seconds)

    return currentTime;
  }

  const formattedTime = formatTime(task.endTime);

const handleEdit = () => {
  dispatch(setModalTask({ name: 'EditTask',taskId: task.id }));
  dispatch(openModal('EditTask'));
  
}

const handleRemove = () => {
  dispatch(setModalTask({ name: 'RemoveTask',taskId: task.id }));
  dispatch(openModal('RemoveTask'));
}

if (task.isActive && task.timeRemaining === 0) {
  dispatch(setModalTask({ name: 'CompletedTask',taskId: task.id }));
  dispatch(openModal('CompletedTask'));
}





  return (
    <div className={`${task.backgroundColor} flex flex-col justify-center items-center rounded-xl p-4 shadow-xl bg-opacity-50 ${task.isActive && task.outlineColor}`}>
      <div className="text-center">
        <h1 className="text-xl font-semibold text-black/75">{task.name}</h1>
        <div className="flex justify-center space-x-2 text-black/75 text-sm">
          {hours > 0 && <p> {hours} Hr</p>}
          {minutes > 0 && <p> {minutes} Min</p>}
        </div>
      </div>
      <div>
        <CountdownTimer task={task} />
      </div>
      <div className="flex justify-center space-x-2 text-black/75 text-sm">
        {
        task.isActive ? 
        <p>{`${new Date().toLocaleString([], { hour: '2-digit', minute: '2-digit' })} - ${formattedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}</p>  
        : 
        <p>--:-- - --:--</p> 
        }
      </div>
      <div className="flex flex-col justify-center items-center">
        <TaskToggle task={task} />
        <div className="flex flex-row space-x-5 text-black">
            <button>
              <FiEdit onClick={handleEdit} size={32} className="text-black/75"/>
            </button>
            <button>
              <FiTrash2 size={32} onClick={handleRemove} className="text-black/75"/>
            </button>
        </div>
      </div>
      <div>
    </div>
  </div >
  )
}

export default SingleTask