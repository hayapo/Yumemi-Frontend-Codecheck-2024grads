import { createContext, SetStateAction } from "react"
import type { Prefecture } from "@/types"

type PrefectureContextType = {
  checkedPrefectures: Prefecture[]
  setCheckedPrefectures: React.Dispatch<SetStateAction<Prefecture[]>>
}

export const CheckedPrefecturesContext = createContext<PrefectureContextType>({} as PrefectureContextType)
