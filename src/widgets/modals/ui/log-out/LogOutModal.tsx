'use client'

import { Button } from '@/shared/ui/button/Button'

import s from './LogOutModal.module.css'
import { useLogout } from '@/shared/api/logout/hooks/use-logout-mutation'

type Props = {
  userId: string
  onClose?: () => void
}

export const LogOutModal = ({ userId, onClose }: Props) => {
  const { mutate, isPending } = useLogout()

  const handleLogout = () => mutate()

  const handleClose = () => onClose?.()

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <div className={s.overlay}>
      <div onClick={handleOverlayClick} className={s.modal}>
        <h3 className={s.header}>Log out</h3>
        <p>{`Are you really want to log out of your account ${userId}?`}</p>
        <section className={s.buttons}>
          <Button variant="outline" onClick={handleLogout} disabled={isPending}>
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
