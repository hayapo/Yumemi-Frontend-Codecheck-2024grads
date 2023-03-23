import { PrefectureWithChecked } from "@/types"
import { CheckBox } from "@/components"
import style from "./PrefectureCheckBoxAccordion.module.css"

type Props = {
  prefecturesWithChecked: PrefectureWithChecked[]
  toggleCheck: (prefCode: number) => void
}

/**
 * アコーディオン型の都道府県選択チェックボックスコンポーネント
 * @param {PrefectureWithChecked[]} prefecturesWithChecked
 * @param {function toggleCheck(prafCode: number) return void} toggleCheck
 */
const PrefectureCheckBoxAccordion: React.FC<Props> = ({ prefecturesWithChecked, toggleCheck }) => {
  return (
    <>
      <div className={style.prefecture_checkbox_accordion_container}>
        <details className={style.prefecture_checkbox_accordion_detail}>
          <summary className={style.prefecture_checkbox_accordion_summary}>都道府県を選択する</summary>
          <div className={style.prefecture_checkbox_accordion}>
            {prefecturesWithChecked.map(({ prefCode, prefName, checked }) => (
              <CheckBox
                label={prefName}
                checked={checked}
                id={`pref_${prefCode}`}
                key={prefCode}
                onChange={() => toggleCheck(prefCode)}
              />
            ))}
          </div>
        </details>
      </div>
    </>
  )
}

export default PrefectureCheckBoxAccordion
