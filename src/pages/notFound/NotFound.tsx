import type { FC } from "react"
import { Link } from "react-router-dom"

const NotFound: FC = () => {
  return (
    <div className="hero min-h-full">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">Oops!</h1>
          <p className="py-6 text-lg leading-loose">
            this page exist in other universe
          </p>
          <Link to="/tasks" className="btn btn-secondary ">
            back to tasks
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
