import { useMemo } from "react"
import { PrefecturesWithChecked } from "@/types"
import { usePrefectureWithCheckedContext } from "@/contexts"

/**
 * checkされた都道府県を返すメモ化されたカスタムフック。
 * @returns {PrefecturesWithChecked[]} `checkedPrefectures`
 */
export const useCheckedPrefecture = (): PrefecturesWithChecked[] => {
  const { prefectureWithChecked } = usePrefectureWithCheckedContext()
  const checkedPrefectures = useMemo(() => {
    return prefectureWithChecked.filter((pref) => pref.checked)
  }, [prefectureWithChecked])
  return checkedPrefectures
}
