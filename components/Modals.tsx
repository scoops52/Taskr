'use client'
import React from 'react'
import EditTask from './EditTask'
import RemoveTaskModal from './RemoveTaskModal'
import { useAppSelector } from '@/store/hooks'
import ClearAllModal from './ClearAllModal'
import CompletedModal from './CompletedModal'
import AboutModal from './AboutModal'

const Modals = () => {
    const modals = useAppSelector(state => state.modal.modals)
    const clearAllModal = modals.find((modal) => modal.name === 'ClearAll');
    const editTaskModal = modals.find((modal) => modal.name === 'EditTask');
    const removeTaskModal = modals.find((modal) => modal.name === 'RemoveTask');
    const completedTaskModal = modals.find((modal) => modal.name === 'CompletedTask');
    const aboutModal = modals.find((modal) => modal.name === 'About');
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        {editTaskModal?.isOpen && <EditTask />}
        {removeTaskModal?.isOpen && <RemoveTaskModal />}
        {clearAllModal?.isOpen && <ClearAllModal />}
        {completedTaskModal?.isOpen && <CompletedModal />}
        {aboutModal?.isOpen && <AboutModal />}
    </div>
  )
}

export default Modals