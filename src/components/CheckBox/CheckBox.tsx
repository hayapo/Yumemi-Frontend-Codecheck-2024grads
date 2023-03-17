import style from "./CheckBox.module.css"

type Props = React.ComponentProps<"input"> & {
  label: string
}

/* チェックボックスコンポーネント */
export const CheckBox: React.FC<Props> = ({ label, ...props }) => {
  return (
    <label>
      <input type="checkbox" className={style.checkbox} {...props} />
      <span>{label}</span>
    </label>
  )
}
