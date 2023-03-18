import React, { useContext } from "react"
import { CheckBox } from "@/components"
import { usePrefectures } from "../hooks/usePrefectures"
import style from "./PrefectureCheckBox.module.css"
import { useCheck } from "../hooks/useCheck"
import { CheckedPrefecturesContext } from "@/lib/contexts"

/**
 * 都道府県のチェックボックスコンポーネント \
 * usePrefectures()で取得した都道府県一覧を使用する
 * @returns {React.FC<{}>}
 */
const PrefectureCheckBox: React.FC = () => {
  const prefectures = usePrefectures()
  const { setCheckedPrefectures } = useContext(CheckedPrefecturesContext)
  const handleCheck = useCheck(setCheckedPrefectures)
  return (
    <>
      <h2 className={style.section_title}>都道府県</h2>
      <div className={style.prefecture_checkbox}>
        {prefectures.map(({ prefCode, prefName }) => (
          <CheckBox
            label={prefName}
            id={`pref_${prefCode}`}
            key={prefCode}
            onChange={handleCheck(prefCode, prefName)}
          />
        ))}
      </div>
    </>
  )
}

export default React.memo(PrefectureCheckBox)
