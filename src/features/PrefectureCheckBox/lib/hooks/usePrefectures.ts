import { useEffect, useState } from "react"
import { getPrefectures } from "../api/getPrefectures"
import { Prefecture } from "@/types"

/**
 * 都道府県一覧を扱うカスタムフック
 * @returns {Prefecture[]} - APIで取得した都道府県のリスト
 */
export const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])
  let ingnore = false
  useEffect(() => {
    const f = async () => {
      const prefData = await getPrefectures()
      setPrefectures(prefData)
    }
    try {
      if (!ingnore) f()
    } catch (error: unknown) {
      if (error instanceof Error) throw new Error(error.message)
    }
    return () => {
      ingnore = true
    }
  }, [])
  return prefectures
}
