export type TextAreaProps = {
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  className?: string
  error?: string
  disabled?: boolean
  maxLength?: number
}
