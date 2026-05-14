'use client'

import { Button } from '@/shared/ui/button/Button'

import s from './ConfirmChangePostModal.module.css'
import { CrossWhiteIcon } from '@/shared/ui/svg/Icon'

type Props = {
  onConfirm: () => void
  onDiscard: () => void
}

export const ConfirmChangePostModal = ({ onConfirm, onDiscard }: Props) => {
  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <section className={s.header}>
          <h3>Close Post</h3>
          <button className={s.close} onClick={onDiscard}>
            <CrossWhiteIcon />
          </button>
        </section>
        <p className={s.confirmMessage}>
          Do you really want to finish editing?
          <br />
          If you close the changes you have made will not be saved
        </p>
        <section className={s.buttons}>
          <Button variant="outline" onClick={onConfirm}>
            Yes
          </Button>
          <Button variant="primary" onClick={onDiscard}>
            No
          </Button>
        </section>
      </div>
    </div>
  )
}
