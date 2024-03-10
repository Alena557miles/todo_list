import React from "react"
import type { FC } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import { minValue, maxValue } from "../../constants/task"
import { addTask } from "../../store/taskReducer"
import { Task } from "../../types"
import { validateTextInput } from "../../utils/inputValidation"

const TaskForm:FC = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm({
    shouldUseNativeValidation: true,
  })
  const onSubmit = async (e: any): Promise<void> => {
    const task: Task = {
      body: e.task,
      state: false,
      id: uuidv4(),
    }
    dispatch(addTask(task))
    reset()
  }

  return (
    <div className="hero">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-w-96 mb-12 rounded"
      >
        <div className="mb-4">
          <label className="block text-gray-600 text-m font-bold mb-2">
            Create your task
          </label>
          <input
            {...register("task", {
              required: "Please enter task.",
              validate: validateTextInput(minValue, maxValue),
            })}
            className="appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
            placeholder="enter text here..."
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            add task
          </button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm
