import { useEffect, useState } from "react"
import { getPrefectures } from "../lib/api/getPrefectures"
import { Prefecture } from "@/types/apiResponses"

/**
 * 都道府県一覧を扱うカスタムフック
 * @returns {Prefecture[]} - APIで取得した都道府県のリスト
 */
export const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])

  useEffect(() => {
    const f = async () => {
      const prefData = await getPrefectures()
      setPrefectures(prefData)
    }
    try {
      f()
    } catch (error: unknown) {
      if (error instanceof Error) console.log(error)
    }
  }, [])
  return prefectures
}
