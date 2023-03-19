import { useEffect, useState, useRef } from "react"
import { PrefecturePopulation } from "@/types"
import { useGetPopulations } from "../api"
import { useCheckedPrefecture } from "../hooks"

/**
 * useGetPopulationsフックを使用して\
 * 都道府県ごとの人口データが含まれたリストを返す
 * @function
 * @returns {PrefecturePopulation[]} 都道府県ごとの人口情報が含まれた配列
 */
export const usePopulations = () => {
  const [prefecuturePopulations, setPrefecturePopulations] = useState<PrefecturePopulation[]>([])
  const checkedPrefectures = useCheckedPrefecture()
  const getPopulations = useGetPopulations()
  const isMountedRef = useRef<boolean>(true)

  useEffect(() => {
    const fetchAndSetPopulations = async () => {
      try {
        const data = await Promise.all(
          checkedPrefectures.map(async (pref) => {
            const populations = await getPopulations(pref.prefCode)
            return { ...pref, populations: populations }
          })
        )

        if (isMountedRef.current) setPrefecturePopulations(data)
      } catch (error: unknown) {
        if (isMountedRef.current && error instanceof Error) {
          console.error(error.message)
        }
      }
    }

    fetchAndSetPopulations()

    return () => {
      isMountedRef.current = false
    }
  }, [checkedPrefectures])

  return prefecuturePopulations
}
