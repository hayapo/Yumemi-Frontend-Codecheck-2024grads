import React from "react"
import { PopulationChart } from "./components/PopulationChart/PopulationChart"

export default React.memo(function PopulationChartSection() {
  return (
    <section id="population_chart_section">
      <PopulationChart />
    </section>
  )
})
