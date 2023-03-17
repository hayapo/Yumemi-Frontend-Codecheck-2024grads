import style from "./CheckBox.module.css"

type Props = React.ComponentProps<"input"> & {
  label: string
}

/* チェックボックスコンポーネント */
export const CheckBox: React.FC<Props> = ({ label, ...props }) => {
  return (
    <label className={style.checkboxContainer}>
      <input type="checkbox" {...props} />
      <span>{label}</span>
    </label>
  )
}
