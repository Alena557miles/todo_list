import React, { FC, SyntheticEvent } from "react"

interface ButtonProps {
  text: string
  onClick: (e: SyntheticEvent<Element, Event>) => void
}
const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
