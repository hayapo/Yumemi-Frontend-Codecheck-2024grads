import { useMemo } from "react"
import * as Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { PrefecturePopulation } from "@/types"
import { HIGHCHARTS_OPTION } from "../../utils/higchartsOption"

type Props = {
  prefecturePopulations: PrefecturePopulation[]
}

/**
 * HightChartsグラフを返すコンポーネント
 * @param {PrefecturePopulation[]} PrefecturePopulation[]
 */
export const Chart: React.FC<Props> = ({ prefecturePopulations }) => {
  const series = useMemo(() => {
    if (prefecturePopulations.length === 0) {
      return [{ data: [], showInLegend: false }]
    }

    // HighChartsにわたすオブジェクトを生成する
    return prefecturePopulations.map(
      (pref): Partial<Highcharts.SeriesOptionsType> => ({
        id: `prefCode-${pref.prefCode.toString()}`,
        index: pref.prefCode,
        name: pref.prefName,
        data: pref.populations.map((population) => [population.year, population.value]),
        showInLegend: true,
      })
    )
  }, [prefecturePopulations])

  return (
    <HighchartsReact highcharts={Highcharts} constructorType={"chart"} options={{ ...HIGHCHARTS_OPTION, series }} />
  )
}
