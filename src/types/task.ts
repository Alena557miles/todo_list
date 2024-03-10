export type Task = {
  body: string
  state: boolean
  id: string
}

export type TASKFILTER = "completed" | "all" | "current"

export interface TasksState {
  tasks: Task[]
}
