import "./App.css"
import { PrefectureCheckBox } from "./features/PrefectureCheckBox"
import { useState } from "react"
import { Prefecture } from "./types"
import { CheckedPrefecturesContext } from "./lib/contexts"

function App() {
  const [checkedPrefectures, setCheckedPrefectures] = useState<Prefecture[]>([])
  return (
    <div className="App">
      <CheckedPrefecturesContext.Provider value={{ checkedPrefectures, setCheckedPrefectures }}>
        <section>
          <PrefectureCheckBox />
        </section>
      </CheckedPrefecturesContext.Provider>
    </div>
  )
}

export default App
