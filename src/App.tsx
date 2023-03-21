import "./App.css"
import { PrefectureCheckBoxSection } from "./features/PrefectureCheckBox"
import { PrefecturesWithCheckedProvider } from "./contexts"
import { PopulationChartSection } from "./features/PopulationChart"

function App() {
  return (
    <div className="App">
      <div className="main">
        <PrefecturesWithCheckedProvider>
          <PrefectureCheckBoxSection />
          <PopulationChartSection />
        </PrefecturesWithCheckedProvider>
      </div>
    </div>
  )
}

export default App
