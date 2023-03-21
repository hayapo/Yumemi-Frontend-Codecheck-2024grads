import React, { useState } from "react"
import { usePopulations } from "../../lib/hooks"
import { Chart } from "../Chart"
import { SectionTitle } from "@/components"
import { PopulationPerYear, PrefecturePopulation, Label } from "@/types"
import { LabelSelect } from "../LabelSelect"
import style from "./PopulationChart.module.css"

const PopulationChart = () => {
  const [selected, setSelected] = useState<Label>("総人口")
  const populations = usePopulations()
  const selectedPopulation = populations.map(
    (pref): PrefecturePopulation => ({
      prefCode: pref.prefCode,
      prefName: pref.prefName,
      populations: pref.populations.find((data) => data.label === selected)?.data as PopulationPerYear[],
    })
  )
  return (
    <div className={style.population_chart}>
      <SectionTitle title="人口構成推移" />
      <LabelSelect selected={selected} setSelected={setSelected} />
      <Chart prefecturePopulations={selectedPopulation} />
    </div>
  )
}

export default React.memo(function PopulationChartSection() {
  return (
    <section id="population_chart_section">
      <PopulationChart />
    </section>
  )
})
