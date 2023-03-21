import style from "./SectionTitle.module.css"

type Props = {
  title: string
}

export const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <>
      <h2 className={style.section_title}>{title}</h2>
    </>
  )
}
