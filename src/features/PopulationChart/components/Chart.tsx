import { useMemo } from "react"
import * as Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { PrefecturePopulation } from "@/types"
import { HIGHCHARTS_OPTION, OLDEST_YEAR, CURRENT_YEAR } from "../utils/constants"

type Props = {
  prefecturePopulations: PrefecturePopulation[]
}

/* HightChartsグラフを返すコンポーネント */
export const Graph: React.FC<Props> = ({ prefecturePopulations }) => {
  const series = useMemo(() => {
    if (prefecturePopulations.length === 0) {
      return [{ data: [], showInLegend: true }]
    }

    return prefecturePopulations.map(
      (pref): Partial<Highcharts.SeriesOptionsType> => ({
        id: pref.prefCode.toString(),
        index: pref.prefCode,
        name: pref.prefName,
        data: pref.populations
          .filter((population) => OLDEST_YEAR <= population.year && population.year <= CURRENT_YEAR)
          .map((population) => [population.year, population.value]),
        showInLegend: true,
      })
    )
  }, [prefecturePopulations])

  return (
    <HighchartsReact highcharts={Highcharts} constructorType={"chart"} options={{ ...HIGHCHARTS_OPTION, series }} />
  )
}
