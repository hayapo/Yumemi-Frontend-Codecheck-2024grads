import { useEffect, useState, useRef } from "react"
import { getPrefectures } from "../api/getPrefectures"
import { Prefecture } from "@/types"

/**
 * 都道府県一覧を扱うカスタムフック
 * @returns {Prefecture[]} - APIで取得した都道府県のリスト
 */
export const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])
  const isMountedRef = useRef<boolean>(true)
  useEffect(() => {
    const fetchAndSetPrefectures = async () => {
      try {
        const prefData = await getPrefectures()

        setPrefectures(prefData)
      } catch (error: unknown) {
        if (isMountedRef.current && error instanceof Error) console.error(error)
      }
    }

    if (isMountedRef.current) fetchAndSetPrefectures()

    return () => {
      isMountedRef.current = false
    }
  }, [])
  return prefectures
}
