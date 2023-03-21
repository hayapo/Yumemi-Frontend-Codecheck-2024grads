import React from "react"
import { isMobile } from "react-device-detect"
import { CheckBox } from "@/components"
import { PrefectureCheckBoxAccordion } from "../PrefectureCheckBoxAccordion"
import { usePrefectureCheck } from "../../lib/hooks"
import { usePrefectureWithCheckedContext } from "@/contexts"
import { SectionTitle } from "@/components/SectionTitle/SectionTitle"
import style from "./PrefectureCheckBox.module.css"

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
      <div className={style.prefecture_checkbox_container}>
        <SectionTitle title="都道府県" />
        {isMobile ? (
          <PrefectureCheckBoxAccordion prefectureWithChecked={prefectureWithChecked} toggleCheck={toggleCheck} />
        ) : (
          <div className={style.prefecture_checkboxes}>
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
        )}
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
