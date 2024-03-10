import React, { useEffect, useMemo, useState } from "react"
import type { FC } from "react"
import TaskList from "../../components/Tasks/TaskList"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import TaskForm from "../../components/TaskForm/TaskForm"
import { ALL, COMPLETED, CURRENT } from "../../constants/tasksList"
import type { TASKFILTER, Task } from "../../types"
import Toolbar from "../../components/Toolbar/Toolbar"

const TasksPage: FC = () => {
  const tasks = useSelector((state: RootState) => state.taskReducer.tasks)
  const currentTaskAmount = tasks.filter((task) => task.state === false).length
  const completedTaskAmount = tasks.filter(
    (task) => task.state === true
  ).length
  const [filter, setFilter] = useState<TASKFILTER | null>(null)
  const [filteredTasks, setFilteredTask] = useState<Task[] | null>(null)

  useEffect(() => {
    if (tasks.length) {
      setFilteredTask(tasks)
    }
  }, [tasks])

  useMemo(() => {
    switch (filter) {
      case CURRENT:
        setFilteredTask(tasks.filter((task) => task.state === false))
        break
      case COMPLETED:
        setFilteredTask(tasks.filter((task) => task.state === true))
        break
      case ALL:
      default:
        setFilteredTask(tasks)
        break
    }
  }, [filter, tasks])
  return (
    <div className="px-4 max-h-full grid grid-rows-[2fr,0.4fr,auto]">
      <TaskForm />
      <Toolbar
        tasks={tasks}
        setFilter={setFilter}
        currentTaskAmount={currentTaskAmount}
        completedTaskAmount={completedTaskAmount}
      />
      <TaskList tasks={filteredTasks} />
    </div>
  )
}
export default TasksPage
