import { Suspense, lazy } from "react"
import { isMobile } from "react-device-detect"
import { usePrefectureCheck } from "../hooks"
import { usePrefecturesWithCheckedContext } from "@/contexts"
import { Fallback, SectionTitle } from "@/components"

import style from "./PrefectureCheckBoxContainer.module.css"

// CheckBoxコンポーネントをDynamic Import
const PrefectureCheckBox = lazy(() => import("./PrefectureCheckBox"))
const PrefectureCheckBoxAccordion = lazy(() => import("./PrefectureCheckBoxAccordion"))

/**
 * 都道府県チェックボックスコンポーネントを集めたコンテナー \
 * `isMobile`でスマホかデスクかの判定をしてコンポーネントを出し分けている
 */
export const PrefectureCheckBoxContainer = () => {
  const toggleCheck = usePrefectureCheck()
  const { prefecturesWithChecked } = usePrefecturesWithCheckedContext()

  return (
    <div className={style.prefecture_checkbox_container}>
      <SectionTitle title="都道府県" />
      <Suspense fallback={<Fallback />}>
        {isMobile ? (
          <PrefectureCheckBoxAccordion prefecturesWithChecked={prefecturesWithChecked} toggleCheck={toggleCheck} />
        ) : (
          <PrefectureCheckBox prefecturesWithChecked={prefecturesWithChecked} toggleCheck={toggleCheck} />
        )}
      </Suspense>
    </div>
  )
}
