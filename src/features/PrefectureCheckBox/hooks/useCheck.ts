import { Prefecture } from "@/types"
import React, { SetStateAction, useCallback } from "react"

export const useCheck = (onCheck: React.Dispatch<SetStateAction<Prefecture[]>>) =>
  useCallback(
    (prefCode: number, prefName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target
      onCheck((prevState) => {
        // checkした場合、checkedPrefecturesに追加する
        if (checked) return [...prevState, { prefCode, prefName }]
        // uncheckした場合、その都道府県のprefCode以外でfilterしてcheckedPrefecturesから除外する
        else return prevState.filter((prefecture) => prefecture.prefCode !== prefCode)
      })
    },
    [onCheck]
  )
