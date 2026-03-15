import { InputHTMLAttributes, ReactNode } from 'react'

export type CheckBoxProps = {
  label?: ReactNode
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>
