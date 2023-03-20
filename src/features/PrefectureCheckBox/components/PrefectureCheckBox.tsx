import React from "react"
import { CheckBox } from "@/components"
import style from "./PrefectureCheckBox.module.css"
import { usePrefectureCheck } from "../lib/hooks"
import { usePrefectureWithCheckedContext } from "@/contexts"

/**
 * 都道府県のチェックボックスコンポーネント \
 * usePrefectures()で取得した都道府県一覧を使用する
 * @returns {React.FC<{}>}
 */
const PrefectureCheckBox: React.FC = () => {
  const toggleCheck = usePrefectureCheck()
  const { prefectureWithChecked } = usePrefectureWithCheckedContext()
  return (
    <>
      <h2 className={style.section_title}>都道府県</h2>
      <div className={style.prefecture_checkbox}>
        {prefectureWithChecked.map(({ prefCode, prefName }) => (
          <CheckBox label={prefName} id={`pref_${prefCode}`} key={prefCode} onChange={() => toggleCheck(prefCode)} />
        ))}
      </div>
    </>
  )
}

export default React.memo(function PrefectureCheckBoxSection() {
  return (
    <section id="prefecture_checkbox_section">
      <PrefectureCheckBox />
    </section>
  )
})
