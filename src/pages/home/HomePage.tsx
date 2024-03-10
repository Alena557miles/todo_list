import React, { FC } from "react"
import { Link } from "react-router-dom"

const HomePage: FC = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">ToDo list</h1>
          <p className="py-6 text-lg leading-loose">
            To-do list: A to-do list is just a list of things you have to-do.
            That means basically anything and everything can be on your to-do
            list—but just because you've written your to-dos down doesn't mean
            your to-do list is actually useful. Effectively tracking when your
            work is due can help you prioritize and get great work done.
          </p>
          <Link to="/tasks" className="btn btn-secondary">
            Let's start
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
