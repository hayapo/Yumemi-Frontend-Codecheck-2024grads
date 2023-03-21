import "./App.css"
import { PrefecturesWithCheckedProvider } from "./contexts"
import { default as PrefectureCheckBoxSection } from "./features/PrefectureCheckBox"
import { default as PopulationChartSection } from "./features/PopulationChart"
import { Header } from "./features/Header"

function App() {
  return (
    <div className="App">
      <Header />
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
