import { POPULATION_LABEL } from "@/utils/constants"

/* RESAS APIから帰ってくる都道府県情報の型 */
export type Prefecture = {
  prefCode: number
  prefName: string
}

/* 都道府県取得(API/api/v1/prefectures)のレスポンスの型 */
export type PrefectureResponse = {
  message: string | null
  result: Prefecture[]
}

/* チェックボックスで選択した都道府県の型 */
export type PrefecturesWithChecked = Prefecture & {
  checked: boolean
}

/* RESAS APIから帰ってくるレスポンスの中の、人口構成情報の型 */
export type PopulationPerYear = {
  year: number
  value: number
  rate?: number
}

/* 都道府県ごとの人口構成情報を扱う型 */
export type PrefecturePopulations = Prefecture & {
  populations: PopulationData[]
}

export type PrefecturePopulation = Prefecture & {
  populations: PopulationPerYear[]
}

export type Label = (typeof POPULATION_LABEL)[number]

export type PopulationData = {
  label: Label
  data: PopulationPerYear[]
}

/* 都道府県別人口構成取得(API/api/v1/population)のレスポンスの型 */
export type PopulationResponse = {
  message: string | null
  result: {
    boundaryYear: number
    data: PopulationData[]
  }
}
