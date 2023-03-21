import "./App.css"
import { PrefectureCheckBoxSection } from "./features/PrefectureCheckBox"
import { PrefecturesWithCheckedProvider } from "./contexts"
import { PopulationChartSection } from "./features/PopulationChart"
import { Header } from "./components/Header/Header"

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
