import React from "react"
import { PrefectureWithChecked } from "@/types"
import { CheckBox } from "@/components"
import style from "./PrefectureCheckBox.module.css"

type Props = {
  prefecturesWithChecked: PrefectureWithChecked[]
  toggleCheck: (prefCode: number) => void
}

/**
 * 都道府県のチェックボックスコンポーネント \
 * usePrefectures()で取得した都道府県一覧を使用する
 * @returns {React.FC<{}>}
 */
const PrefectureCheckBox: React.FC<Props> = ({ prefecturesWithChecked, toggleCheck }) => {
  return (
    <>
      <div className={style.prefecture_checkboxes}>
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
    </>
  )
}

export default PrefectureCheckBox
