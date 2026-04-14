'use client'

import s from './AvatarUploader.module.css'
import { Button } from '@/shared/ui/button/Button'
import Image from 'next/image'
import { CloseIcon, ImageIcon } from '@/shared/ui/svg/Icon'

interface AvatarUploaderProps {
  profilePhoto: string | null
  onOpenCard: () => void
  onDelete: (e: React.MouseEvent) => void
}

export const AvatarUploader = ({ profilePhoto, onOpenCard, onDelete }: AvatarUploaderProps) => {
  return (
    <div className={s.userPhotoWrapper}>
      <div className={s.avatarContainer} onClick={onOpenCard}>
        {profilePhoto ? (
          <Image src={profilePhoto} alt="User avatar" width={205} height={205} className={s.userPhoto} />
        ) : (
          <div className={s.placeholderIcon}>
            <ImageIcon />
          </div>
        )}
        {profilePhoto && (
          <button onClick={onDelete} className={s.deleteButton}>
            <CloseIcon color="var(--color-light-100)" />
          </button>
        )}
      </div>
      <Button onClick={onOpenCard} variant="outline">
        Select Profile Photo
      </Button>
    </div>
  )
}
