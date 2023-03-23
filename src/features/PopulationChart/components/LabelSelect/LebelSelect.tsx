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

/**
 * 人口構成情報のラベルを選択するコンポーネント
 * @param {Label} selected
 * @param {React.Dispatch<SetStateAction<Label>>} setSelected
 */
export const LabelSelect: React.FC<Props> = ({ selected, setSelected }) => {
  // POPULATION_LABELからラジオボタンオブジェクトの配列を生成する
  const radioButtons: RadioButton[] = POPULATION_LABEL.map((l) => ({ label: l, value: l }))

  // 選択ラベルを変更する関数
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => setSelected(event.target.value as Label)

  return (
    <>
      <div className={style.label_select_container}>
        {radioButtons.map((radio) => {
          return (
            <label
              key={radio.value}
              className={radio.value === selected ? style.radio_button_selected : style.radio_button}
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
