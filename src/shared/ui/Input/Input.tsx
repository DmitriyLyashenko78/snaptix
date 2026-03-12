'use client'

import { useState } from 'react'
import s from './Input.module.css'
import { InputProps } from '@/src/shared/ui/Input/Input.types'

export const Input = ({
  label,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  error,
  rightIconClickable = false,
  type,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const inputType = rightIconClickable && type === 'password' ? (showPassword ? 'text' : 'password') : type

  const handleRightIconClick = () => {
    if (rightIconClickable && type === 'password') {
      setShowPassword((prev) => !prev)
    }
  }

  return (
    <div className={s.root}>
      {label && <label className={s.label}>{label}</label>}
      <div className={s.control}>
        {LeftIcon && (
          <div className={s.leftIcon}>
            <LeftIcon width={16} height={16} />
          </div>
        )}

        <input
          className={`${s.input} ${LeftIcon ? s.withLeftIcon : ''} ${error ? s.error : ''}`}
          type={inputType}
          {...rest}
        />

        {RightIcon && (
          <button type="button" className={s.rightIcon} onClick={handleRightIconClick}>
            <RightIcon width={16} height={16} />
          </button>
        )}
      </div>
      {error && <span className={s.errorText}>{error}</span>}
    </div>
  )
}
