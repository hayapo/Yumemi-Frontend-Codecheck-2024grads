import React from "react"
import { CheckBox } from "@/components"
import { usePrefectures } from "../hooks/usePrefectures"
import style from "./PrefectureCheckBox.module.css"

/**
 * 都道府県のチェックボックスコンポーネント \
 * usePrefectures()で取得した都道府県一覧を使用する
 * @returns {React.FC<{}>}
 */
export const PrefectureCheckBox: React.FC = () => {
  const prefectures = usePrefectures()
  return (
    <>
      <h2 className={style.section_title}>都道府県</h2>
      <div className={style.prefecture_checkbox}>
        {prefectures.map(({ prefCode, prefName }) => (
          <CheckBox id={`pref_${prefCode}`} label={prefName} key={prefCode} />
        ))}
      </div>
    </>
  )
}
