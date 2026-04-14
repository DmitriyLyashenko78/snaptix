'use client'

import s from './DeleteConfirmationCard.module.css'
import { Button } from '@/shared/ui/button/Button'
import Card from '@/shared/ui/card/Card'

interface DeleteConfirmationCardProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export const DeleteConfirmationCard = ({ isOpen, onClose, onConfirm }: DeleteConfirmationCardProps) => {
  return (
    <Card width={438} height={240} isOpen={isOpen} onClose={onClose} title="Delete Photo">
      <div className={s.deleteCardContainer}>
        <p className={s.deleteText}>Are you sure you want to delete this photo?</p>
        <div className={s.deleteActions}>
          <Button variant="outline" width="auto" onClick={onClose}>
            No
          </Button>
          <Button variant="primary" width="auto" onClick={onConfirm}>
            Yes
          </Button>
        </div>
      </div>
    </Card>
  )
}
