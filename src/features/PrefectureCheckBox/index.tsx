import { memo } from "react"
import { PrefectureCheckBoxContainer } from "./components/PrefectureCheckBoxContaner"

export default memo(function PrefectureCheckBoxSection() {
  return (
    <>
      <section id="prefecture_checkbox_section">
        <PrefectureCheckBoxContainer />
      </section>
    </>
  )
})
