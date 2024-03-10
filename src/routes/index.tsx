import { createBrowserRouter } from "react-router-dom"
import { path } from "./path"
import Home from "../pages/home/HomePage"
import NotFound from "../pages/notFound/NotFound"
import Tasks from "../pages/tasksPage/TasksPage"

const router = createBrowserRouter([
  {
    path: path.home,
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: path.tasks,
    element: <Tasks />,
  },
])

export default router
