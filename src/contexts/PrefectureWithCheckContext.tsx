import { useState, createContext, ReactNode, SetStateAction, useContext } from "react"
import type { PrefectureWithChecked } from "@/types"

type Props = {
  children: ReactNode
}

export type PrefectureWithCheckedContextType = {
  prefecturesWithChecked: PrefectureWithChecked[]
  setPrefecturesWithChecked: React.Dispatch<SetStateAction<PrefectureWithChecked[]>>
}

const PrefecturesWithCheckedContext = createContext<PrefectureWithCheckedContextType>(
  {} as PrefectureWithCheckedContextType
)

export const usePrefecturesWithCheckedContext = () => useContext(PrefecturesWithCheckedContext)

export const PrefecturesWithCheckedProvider: React.FC<Props> = ({ children }) => {
  const [prefecturesWithChecked, setPrefecturesWithChecked] = useState<PrefectureWithChecked[]>([])
  return (
    <PrefecturesWithCheckedContext.Provider value={{ prefecturesWithChecked, setPrefecturesWithChecked }}>
      {children}
    </PrefecturesWithCheckedContext.Provider>
  )
}
