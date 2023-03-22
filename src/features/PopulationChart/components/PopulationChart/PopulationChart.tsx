import { Suspense, useState, lazy } from "react"
import { usePopulations } from "../../lib/hooks"
import { Fallback, SectionTitle } from "@/components"
import { PopulationPerYear, PrefecturePopulation, Label } from "@/types"
import { LabelSelect } from "../LabelSelect"
import style from "./PopulationChart.module.css"

const Chart = lazy(() => import("../Chart/Chart"))

export const PopulationChart = () => {
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
      <Suspense fallback={<Fallback />}>
        <Chart prefecturePopulations={selectedPopulation} />
      </Suspense>
    </div>
  )
}
