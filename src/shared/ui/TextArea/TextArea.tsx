'use client'

import { type ChangeEvent, useEffect, useRef, useState } from 'react'

import s from './TextArea.module.css'
import type { TextAreaProps } from './TextArea.types'

export const TextArea = ({ className, placeholder, error, disabled }: TextAreaProps) => {
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const adjustHeight = () => {
    const element = textareaRef.current
    if (element) {
      element.style.height = 'auto'
      element.style.height = `${element.scrollHeight}px`
    }
  }

  useEffect(() => {
    adjustHeight()
  }, [text])

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)

  const textAreaClassName = `${s.textArea} ${error ? s.error : ''} ${className || ''}`

  return (
    <div className={s.containerArea}>
      <textarea
        disabled={disabled}
        className={textAreaClassName}
        ref={textareaRef}
        value={text}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
      {error && <span className={s.errorMessage}>{error}</span>}
    </div>
  )
}
