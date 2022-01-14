import React, {FC} from "react"
import Button, {ButtonClickHandler} from "./Button"

const arrNumbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

const renderButtons = (onClickNumber: ButtonClickHandler) => (
  arrNumbers.map((number: number) => (
    <Button
      key={number}
      text={number.toString()}
      clickHandler={onClickNumber}
    />
  ))
)

type Props = {
  onClickNumber: ButtonClickHandler
}

const Numbers: FC<Props> = ({onClickNumber}) => (
  <section className="numbers">
    {renderButtons(onClickNumber)}
  </section>
)

export default Numbers
