import React, { FC } from "react"
import { RouterProvider } from "react-router-dom"
import AppContainer from "./AppContainer"
import "./App.css"
import router from "./routes"

const App: FC = () => {
  return (
    <>
      <AppContainer>
        <RouterProvider router={router} />
      </AppContainer>
    </>
  )
}

export default App
