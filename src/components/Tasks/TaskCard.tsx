import React, { FC } from "react"
import { useDispatch } from "react-redux"
import { Task } from "../../types"
import { markTask } from "../../store/taskReducer"

interface TaskProps {
  task: Task
}

const TaskCard: FC<TaskProps> = ({ task }) => {
  const dispatch = useDispatch()
  const { id, body, state } = task
  const onClick = ():void => {
    const task: Task = {
      id,
      body,
      state: !state,
    }
    dispatch(markTask(task))
  }
  return (
    <button
      onClick={onClick}
      className="card card-compact rounded-xl items-center  border border-purple-500"
    >
      <div className="card-body justify-content text-center">
        <h2
          className={`${
            state ? `line-through ` : `no-underline text-violet-700`
          } card-title text-center  text-l font-bold`}
        >
          {body}
        </h2>
      </div>
    </button>
  )
}

export default TaskCard
