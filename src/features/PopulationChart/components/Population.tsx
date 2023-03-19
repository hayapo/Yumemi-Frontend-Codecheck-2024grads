import React from "react"
import { usePopulations } from "../lib/hooks"

const Population = () => {
  const populations = usePopulations()
  return (
    <>
      <div>aaaaa</div>
    </>
  )
}

export default React.memo(Population)
