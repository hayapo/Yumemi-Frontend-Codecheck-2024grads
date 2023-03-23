import { useMemo } from "react"
import { PrefectureWithChecked } from "@/types"
import { usePrefecturesWithCheckedContext } from "@/contexts"

/**
 * checkされた都道府県を返すメモ化されたカスタムフック。
 * @returns {PrefectureWithChecked[]} `checkedPrefectures`
 */
export const useCheckedPrefecture = (): PrefectureWithChecked[] => {
  const { prefecturesWithChecked } = usePrefecturesWithCheckedContext()
  const checkedPrefectures = useMemo(() => {
    return prefecturesWithChecked.filter((pref) => pref.checked)
  }, [prefecturesWithChecked])
  return checkedPrefectures
}
