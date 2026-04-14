import { ReactNode } from 'react'

export interface CardProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  width?: string | number
  height?: string | number
}
