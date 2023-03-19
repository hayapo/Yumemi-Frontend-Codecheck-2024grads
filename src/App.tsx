import "./App.css"
import { PrefectureCheckBox } from "./features/PrefectureCheckBox"
import { PrefecturesWithCheckedProvider } from "./contexts"

function App() {
  return (
    <div className="App">
      <PrefecturesWithCheckedProvider>
        <section>
          <PrefectureCheckBox />
        </section>
      </PrefecturesWithCheckedProvider>
    </div>
  )
}

export default App
