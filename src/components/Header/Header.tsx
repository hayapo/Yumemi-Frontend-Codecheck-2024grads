import { TITLE } from "@/utils/constants"
import style from "./Header.module.css"

export const Header: React.FC = () => {
  return (
    <>
      <div className={style.header}>{TITLE}</div>
    </>
  )
}
