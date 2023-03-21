import { SetStateAction } from "react"
import { Label } from "@/types"
import { POPULATION_LABEL } from "@/utils/constants"
import style from "./LabelSelect.module.css"

type RadioButton = {
  label: Label
  value: Label
}

type Props = {
  selected: Label
  setSelected: React.Dispatch<SetStateAction<Label>>
}

export const LabelSelect: React.FC<Props> = ({ selected, setSelected }) => {
  const radioButtons: RadioButton[] = POPULATION_LABEL.map((l) => ({ label: l, value: l }))

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => setSelected(event.target.value as Label)

  return (
    <>
      <div className={style.labelSelectContainer}>
        {radioButtons.map((radio) => {
          return (
            <label
              key={radio.value}
              className={radio.value === selected ? style.radioButtonSelected : style.radioButton}
            >
              <input
                type="radio"
                name={radio.label}
                value={radio.value}
                checked={radio.value === selected}
                onChange={changeValue}
              />
              <span>{radio.label}</span>
            </label>
          )
        })}
      </div>
    </>
  )
}
