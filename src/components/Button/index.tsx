import React, {FC} from "react"
import './Button.css'

export type ButtonClickHandler = (text: string) => void

type Props = {
  text: string,
  type?: string,
  clickHandler: ButtonClickHandler
}

const Button: FC<Props> = ({text, type, clickHandler}) => (
  <button
    className={type}
    onClick={() => clickHandler(text)}
  >
    <span>{text}</span>
  </button>
)

export default Button
