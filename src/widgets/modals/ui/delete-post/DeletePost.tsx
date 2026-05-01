'use client'

import { Button } from '@/shared/ui/button/Button'

import s from './DeletePostModal.module.css'
import { CrossWhiteIcon } from '@/shared/ui/svg/Icon'

type Props = {
  userPostId: string
  onClose?: () => void
}

export const DeletePost = ({ userPostId, onClose }: Props) => {
  const handleClose = () => onClose?.()

  const handleDeletePost = () => {
    // todo: энпоинт удаления поста
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <div className={s.overlay}>
      <div onClick={handleOverlayClick} className={s.modal}>
        <section className={s.header}>
          <h3>Delete Post</h3>
          <button className={s.close} onClick={onClose}>
            <CrossWhiteIcon />
          </button>
        </section>
        <p>Are you sure that want to delete this post?</p>
        <section className={s.buttons}>
          <Button variant="outline" onClick={handleDeletePost} disabled={true}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
        </section>
      </div>
    </div>
  )
}
