import { Suspense, useState, lazy } from "react"
import { usePopulations } from "../../hooks"
import { Fallback, SectionTitle } from "@/components"
import { PopulationPerYear, PrefecturePopulation, Label } from "@/types"
import { LabelSelect } from "../LabelSelect"
import style from "./PopulationChart.module.css"

// ChartコンポーネントをDynamic Import
const Chart = lazy(() => import("../Chart"))

/* 人口構成情報を選択し、描画するコンポーネント */
export const PopulationChart = () => {
  // 選択された人口構成情報ラベル(初期値は総人口)
  const [selected, setSelected] = useState<Label>("総人口")

  // 選択済み都道府県の人口構成情報
  const populations = usePopulations()

  // 選択された人口構成ラベルの人口構成情報で新たにPrefecturePopulationを生成する
  const selectedPopulation = populations.map(
    (pref): PrefecturePopulation => ({
      prefCode: pref.prefCode,
      prefName: pref.prefName,
      // pref.populations.find((data) => data.label === selected)はundefinedにならない
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
