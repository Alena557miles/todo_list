import React from "react"
import type { ReactNode, FC } from "react"
import "./App.css"
import { SiOpenaigym } from "react-icons/si"
import { NAME } from "./constants/task"

interface AppConrainerProps {
  children: ReactNode
}

const AppContainer: FC<AppConrainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto pt-5 h-screen">
      <div className="flex items-center mb-4 gap-4 px-4">
        <SiOpenaigym className="w-10 h-10 text-primary" />
        <h2 className="text-xl font-extrabold text-primary mr-auto">
          TODO LIST APP
        </h2>
        <div className="py-12">
          <p className="text-slate-500 text-end">
            author:{" "}
            <span className="uppercase font-semibold text-violet-600">
              {NAME}
            </span>
          </p>
        </div>
      </div>
      <div className="py-9 items-center h-5/6">{children}</div>
    </div>
  )
}

export default AppContainer
