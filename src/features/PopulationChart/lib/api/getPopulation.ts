import axios, { AxiosResponse } from "axios"
import { useRef, useCallback } from "react"
import { AxiosOption } from "@/lib/api/axiosOption"
import { PopulationPerYear, PopulationResponse } from "@/types"

/**
 * 都道府県コードに基づいて \
 * 人口データを取得する非同期関数を返すカスタムフック
 * @returns {function} 都道府県コードを引数として受け取り、人口データを返す非同期関数
 */
export const useGetPopulations = () => {
  // キャッシュを格納するuseRefフック
  const cache = useRef<Record<number, PopulationPerYear[]>>({})

  /**
   * 都道府県コードに基づいて人口データを取得する非同期関数 \
   * prefCodeに紐づけて、取得した人口構成情報をキャッシュしている
   * @param {number} prefCode - 都道府県コード
   * @returns {Promise<PopulationPerYear[]>} 指定された都道府県の人口データの配列
   * @throws {Error} APIリクエストが失敗した場合 or 総人口のデータが取得できなかった場合にエラーをthrow
   */
  const getPopulations = useCallback(async (prefCode: number): Promise<PopulationPerYear[]> => {
    // キャッシュがある場合はキャッシュを返す
    if (cache.current[prefCode]) return cache.current[prefCode]

    const endpoint = `api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`
    const option = AxiosOption(endpoint)
    const populationResponse: PopulationResponse = await axios(option).then(
      (res: AxiosResponse<PopulationResponse>) => res.data
    )

    try {
      const population = populationResponse.result.data.find((data) => data.label === "総人口")
      if (!population) throw new Error()

      // キャッシュに追加し、キャッシュからreturnする
      cache.current[prefCode] = population.data

      return cache.current[prefCode]
    } catch (error) {
      return Promise.reject(error)
    }
  }, [])

  return getPopulations
}
