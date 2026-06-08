'use client'

import { useRef } from 'react'
import { Button } from '@/shared/ui/button/Button'
import { ImageIcon } from '@/shared/ui/svg/Icon'
import s from './UploadStep.module.css'

type Props = {
  onFileSelected: (file: File) => void
  error: string | null
  onClearError: () => void
}

export const UploadStep = ({ onFileSelected, error, onClearError }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) onFileSelected(file)
    e.target.value = ''
  }

  const handleSelectClick = () => {
    onClearError()
    inputRef.current?.click()
  }

  return (
    <div className={s.container}>
      <div className={s.placeholder}>
        <span className={s.placeholderIcon}>
          <ImageIcon width={80} height={80} />
        </span>
        <p className={s.placeholderText}>Select photos or drag and drop here</p>
      </div>

      {error && <p className={s.error}>{error}</p>}

      <div className={s.actions}>
        <Button variant="primary" width="full" onClick={handleSelectClick}>
          Select from Computer
        </Button>
        <Button variant="ghost" width="full">
          Open draft
        </Button>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png"
        className={s.fileInput}
        onChange={handleFileChange}
      />
    </div>
  )
}
