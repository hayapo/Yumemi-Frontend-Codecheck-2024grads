import React from "react"
import { usePopulations } from "../lib/hooks"

const PopulationChart = () => {
  const populations = usePopulations()
  return (
    <>
      <h2>人口推移</h2>
    </>
  )
}

export default React.memo(function PopulationChartSection() {
  return (
    <section id="population_chart_section">
      <PopulationChart />
    </section>
  )
})
