import React from "react"
import { usePopulations } from "../lib/hooks"
import { Graph } from "./Chart"
import { SectionTitle } from "@/components/SectionTitle/SectionTitle"

const PopulationChart = () => {
  const populations = usePopulations()
  return (
    <>
      <SectionTitle title="人口構成推移" />
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
