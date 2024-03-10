import React, { FC } from "react"
import { Task } from "../../types"
import TaskCard from "./TaskCard"

interface TasksListProps {
  tasks: Task[] | null
}

const TaskList: FC<TasksListProps> = ({ tasks }) => {
  return (
    <>
      {!tasks?.length && <p>there is no task to display...</p>}
      <div className="mt-8 grid sm:grid-cols- lg:grid-cols-4 gap-8">
        {tasks?.map((task) => {
          return <TaskCard key={task.id} task={task} />
        })}
      </div>
    </>
  )
}

export default TaskList
