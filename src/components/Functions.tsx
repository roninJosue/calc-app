import React, {FC} from "react"
import Button, {ButtonClickHandler} from "./Button"

type Props = {
  onContentClear: ButtonClickHandler,
  onDelete: ButtonClickHandler
}

const Functions: FC<Props> = ({onContentClear, onDelete}) => (
  <section className="functions">
    <Button type='button-long-text' text='Clear' clickHandler={onContentClear}/>
    <Button text='&larr;' clickHandler={onDelete}/>
  </section>
)

export default Functions
