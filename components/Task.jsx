import { useSelector } from "react-redux"


const Task = () => {
    const {task, isActive, isOver, endTime, startTime} = useSelector(state => state.task);

  return (
    <div></div>
  )
}

export default Task