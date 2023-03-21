/* 都道府県取得APIと人口構成情報取得APIのエンドポイント */
export const PREFECTURE_API_ENDPOINT = "api/v1/prefectures"
export const POPULATION_API_ENDPOINT = (prefCode: number) =>
  `api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`

export const POPULATION_LABEL = ["総人口", "年少人口", "生産年齢人口", "老年人口"] as const
