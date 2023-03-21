import React from "react"
import { PrefectureCheckBox } from "./components/PrefectureCheckBox/PrefectureCheckBox"

export default React.memo(function PrefectureCheckBoxSection() {
  return (
    <section id="prefecture_checkbox_section">
      <PrefectureCheckBox />
    </section>
  )
})
