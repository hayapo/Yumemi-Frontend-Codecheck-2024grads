import { useState, createContext, ReactNode, SetStateAction, useContext } from "react"
import type { PrefecturesWithChecked } from "@/types"

type Props = {
  children: ReactNode
}

export type PrefectureWithCheckedContextType = {
  prefectureWithChecked: PrefecturesWithChecked[]
  setPrefectureWithChecked: React.Dispatch<SetStateAction<PrefecturesWithChecked[]>>
}

const PrefectureWithCheckedContext = createContext<PrefectureWithCheckedContextType>(
  {} as PrefectureWithCheckedContextType
)

export const usePrefectureWithCheckedContext = () => useContext(PrefectureWithCheckedContext)

export const PrefecturesWithCheckedProvider: React.FC<Props> = ({ children }) => {
  const [prefectureWithChecked, setPrefectureWithChecked] = useState<PrefecturesWithChecked[]>([])
  return (
    <PrefectureWithCheckedContext.Provider value={{ prefectureWithChecked, setPrefectureWithChecked }}>
      {children}
    </PrefectureWithCheckedContext.Provider>
  )
}
