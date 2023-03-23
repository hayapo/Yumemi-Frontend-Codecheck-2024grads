import axios, { AxiosResponse } from "axios"
import { useRef, useCallback } from "react"
import { AxiosOption } from "@/lib/api/axiosOption"
import { PopulationData, PopulationResponse } from "@/types"
import { POPULATION_API_ENDPOINT } from "@/utils/constants"

/**
 * 都道府県コードに基づいて \
 * 人口データを取得する非同期関数を返すカスタムフック
 * @returns {function} 都道府県コードを引数として受け取りキャッシュし, 人口データを返す非同期関数
 */
export const useGetPopulations = () => {
  // キャッシュを格納するuseRefフック
  const cache = useRef<Record<number, PopulationData[]>>({})

  // 都道府県コードに基づいて人口データを取得する非同期関数
  const getPopulations = useCallback(async (prefCode: number): Promise<PopulationData[]> => {
    // キャッシュにヒットした場合はキャッシュを返す
    if (cache.current[prefCode]) return cache.current[prefCode]

    const option = AxiosOption(POPULATION_API_ENDPOINT(prefCode))

    try {
      const populationResponse: AxiosResponse<PopulationResponse> = await axios(option)

      const populations = populationResponse.data.result.data

      // キャッシュに追加し、キャッシュからreturnする
      cache.current[prefCode] = populations
      return cache.current[prefCode]
    } catch (error) {
      console.error(`getPopulation Error: ${error}`)
      throw new Error("人口構成情報データの取得に失敗")
    }
  }, [])

  return getPopulations
}
