import { PrefecturesWithChecked } from "@/types"
import { CheckBox } from "@/components"
import style from "./PrefectureCheckBoxAccordion.module.css"

type Props = {
  prefectureWithChecked: PrefecturesWithChecked[]
  toggleCheck: (prefCode: number) => void
}

/**
 * アコーディオン型の都道府県選択チェックボックスコンポーネント
 * @param {PrefecturesWithChecked[]} 都道府県一覧
 * @param {function name(prafCode: number) return void}
 */
export const PrefectureCheckBoxAccordion: React.FC<Props> = ({ prefectureWithChecked, toggleCheck }) => {
  return (
    <details className={style.prefecture_checkbox_accordion_detail}>
      <summary className={style.prefecture_checkbox_accordion_summary}>都道府県を選択する</summary>
      <div className={style.prefecture_checkbox_accordion}>
        {prefectureWithChecked.map(({ prefCode, prefName, checked }) => (
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
  )
}
