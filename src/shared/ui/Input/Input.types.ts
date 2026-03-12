import React, { InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  rightIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  leftIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  error?: string
  rightIconClickable?: boolean
}
