import { CheckBoxProps } from '@/src/shared/ui/checkbox/CheckBoxProps'
import { useId } from 'react'
import s from './Checkbox.module.css'
import { Check } from '@/src/shared/ui/SVG/Icon'

export const Checkbox = ({ label, disabled, checked, ...props }: CheckBoxProps) => {
  const id = useId()
  return (
    <label htmlFor={id} className={`${s.wrapper} ${disabled ? s.disabled : ''}`}>
      <input id={id} type="checkbox" className={s.input} checked={checked} disabled={disabled} {...props} />
      <span className={s.boxWrapper}>
        <span className={s.box}>{checked && <Check className={s.icon} width={18} height={18} />}</span>
      </span>
      {label && <span className={s.label}>{label}</span>}
    </label>
  )
}
