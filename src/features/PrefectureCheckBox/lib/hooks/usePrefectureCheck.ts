import { useCallback, useEffect } from "react"
import { usePrefectureWithCheckedContext } from "@/contexts"
import { usePrefectures } from "./usePrefectures"

export const usePrefectureCheck = () => {
  const prefectures = usePrefectures()

  const { setPrefectureWithChecked } = usePrefectureWithCheckedContext()
  useEffect(() => {
    if (prefectures) {
      setPrefectureWithChecked(prefectures.map((pref) => ({ ...pref, checked: false })))
    } else {
      setPrefectureWithChecked([])
    }
  }, [prefectures])

  const toggleCheck = useCallback(
    (prefCode: number) => {
      setPrefectureWithChecked((prevState) =>
        prevState.map((pref) => {
          if (pref.prefCode === prefCode) {
            return { ...pref, checked: !pref.checked }
          }
          return pref
        })
      )
    },
    [setPrefectureWithChecked]
  )
  return toggleCheck
}
