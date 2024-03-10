import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { Task, TasksState } from "../types"


const initialState: TasksState = {
  tasks: [],
}

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks = [...state.tasks, action.payload]
    },
    removeTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id)
    },

    markTask: (state, action: PayloadAction<Task>) => {
      state.tasks = [
        ...state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            task.state = action.payload.state
          }
          return task
        }),
      ]
    },
  },
})

export const { addTask, removeTask, markTask } = tasksSlice.actions
export default tasksSlice.reducer
