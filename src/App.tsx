import "./App.css"
import { PrefectureCheckBox } from "./features/PrefectureCheckBox"
import { PrefecturesWithCheckedProvider } from "./contexts"
import { Population } from "./features/PopulationChart/"

function App() {
  return (
    <div className="App">
      <PrefecturesWithCheckedProvider>
        <section>
          <PrefectureCheckBox />
        </section>
        <section>
          <Population />
        </section>
      </PrefecturesWithCheckedProvider>
    </div>
  )
}

export default App
