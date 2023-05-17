import { useAppDispatch } from "@/store/hooks"
import { closeModal } from "@/store/modal"
import { clearAllTasks } from "@/store/tasksSlice"


const ClearAllModal = () => {
    const dispatch = useAppDispatch()

    const handleClear = () => {
        dispatch(clearAllTasks());
        dispatch(closeModal('ClearAll'));
    }

    const handleCancel = () => {
        dispatch(closeModal('ClearAll'));
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
                <div className="flex flex-col gap-5 bg-white p-5 rounded">
                    <h1 className="text-xl font-semibold">Are you sure you want to clear all tasks?</h1>
                    <div className="flex justify-center gap-5">
                    <button onClick={handleClear} className="button button-primary">Yes, clear all</button>
                    <button onClick={handleCancel} className="button button-outline">Cancel</button>
                    </div>
                </div>
        </div>
    )
}

export default ClearAllModal