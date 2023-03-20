import React from "react"
import { usePopulations } from "../lib/hooks"
import { Graph } from "./Chart"

const PopulationChart = () => {
  const populations = usePopulations()
  return (
    <>
      <h2>人口構成推移</h2>
      <Graph prefecturePopulations={populations} />
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
