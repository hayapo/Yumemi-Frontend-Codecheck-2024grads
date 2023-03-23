import style from "./CheckBox.module.css"

type Props = React.ComponentProps<"input"> & {
  label: string
  checked: boolean
}

/* チェックボックスコンポーネント */
export const CheckBox: React.FC<Props> = ({ label, checked, ...props }) => {
  return (
    <label className={checked ? style.checkbox_checked : style.checkbox_container}>
      <input type="checkbox" {...props} />
      <span>{label}</span>
    </label>
  )
}
