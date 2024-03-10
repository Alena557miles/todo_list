import React, { FC } from "react"
import { ALL, COMPLETED, CURRENT } from "../../constants"
import Button from "../common/Button/Button"
import { TASKFILTER, Task } from "../../types/task"

interface ToolbarProps {
  tasks: Task[] | null
  currentTaskAmount: number
  completedTaskAmount: number
  setFilter: React.Dispatch<React.SetStateAction<TASKFILTER | null>>
}
const Toolbar: FC<ToolbarProps> = ({
  tasks,
  currentTaskAmount,
  completedTaskAmount,
  setFilter,
}) => {
  return (
    <>
      <div className="mb-3">
        <h1 className="text-3xl font-bold text-primary">Checklist</h1>
      </div>
      <div className="flex flex-row justify-between">
        {!!tasks?.length && 
          <div className="min-w-80">
            <p className=" text-gray-600 text-sm font-bold">
              amount of current tasks: {currentTaskAmount}
            </p>
            <p className=" text-gray-600 text-sm font-bold">
              amount of completed tasks: {completedTaskAmount}
            </p>
            <p className=" text-gray-400 text-sm font-bold">
              total amount of tasks: {tasks.length}
            </p>
          </div>
        }
        <div className=" hero flex flex-row justify-end w-full flex-wrap">
          <p className="text-white font-bold mr-2">Filter task:</p>
          <div className="flex flex-row justify-between w-80 h-10">
            <Button text={ALL} onClick={():void => setFilter(ALL)} />
            <Button text={COMPLETED} onClick={():void => setFilter(COMPLETED)} />
            <Button text={CURRENT} onClick={():void => setFilter(CURRENT)} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Toolbar
