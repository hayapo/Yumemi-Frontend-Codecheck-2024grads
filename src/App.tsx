import { Suspense, lazy } from "react"
import { PrefecturesWithCheckedProvider } from "./contexts"
import { Header, Fallback } from "./components"
import "./App.css"

const PrefectureCheckBoxSection = lazy(() => import("./features/PrefectureCheckBox"))
const PopulationChartSection = lazy(() => import("./features/PopulationChart"))

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <PrefecturesWithCheckedProvider>
          <Suspense fallback={<Fallback />}>
            <PrefectureCheckBoxSection />
            <PopulationChartSection />
          </Suspense>
        </PrefecturesWithCheckedProvider>
      </div>
    </div>
  )
}

export default App
