import { useCallback, useEffect } from "react"
import { usePrefecturesWithCheckedContext } from "@/contexts"
import { usePrefectures } from "./usePrefectures"

/**
 * チェックボックスをチェックした際に使用するカスタムフック
 * @returns {function toggleCheck(prefCode: number) return void}
 */
export const usePrefectureCheck = () => {
  const prefectures = usePrefectures()

  const { setPrefecturesWithChecked } = usePrefecturesWithCheckedContext()

  useEffect(() => {
    if (prefectures) {
      setPrefecturesWithChecked(prefectures.map((pref) => ({ ...pref, checked: false })))
    } else {
      setPrefecturesWithChecked([])
    }
  }, [prefectures])

  const toggleCheck = useCallback(
    (prefCode: number) => {
      setPrefecturesWithChecked((prevState) =>
        prevState.map((pref) => {
          if (pref.prefCode === prefCode) {
            return { ...pref, checked: !pref.checked }
          }
          return pref
        })
      )
    },
    [setPrefecturesWithChecked]
  )
  return toggleCheck
}
