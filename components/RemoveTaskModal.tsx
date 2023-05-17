'use client'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { removeTask } from '@/store/tasksSlice';
import { closeModal } from '@/store/modal';

const RemoveTaskModal = () => {
    const modals = useAppSelector(state => state.modal.modals);
    const modal = modals.find((modal) => modal.name === 'RemoveTask')
    const task = useAppSelector(state => state.tasks.tasks.find((task) => task.id === modal?.taskId));
    const dispatch = useAppDispatch()

    const handleRemove = () => {
        dispatch(removeTask(task?.id));
        dispatch(closeModal('RemoveTask'))
      };

    const handleCancel = () => {
      dispatch(closeModal('RemoveTask'))
    }

  return (
    <div>
                <div className="flex flex-col gap-5 bg-white p-5 rounded">
                    <h1 className="text-xl font-semibold">Are you sure you want to remove this task</h1>
                    <div className="flex justify-center gap-5">
                    <button onClick={handleRemove} className="button button-primary">Yes</button>
                    <button onClick={handleCancel} className="button button-outline">No</button>
                    </div>
                </div>
        </div>
  )
}

export default RemoveTaskModal