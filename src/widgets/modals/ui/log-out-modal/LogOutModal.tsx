'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/shared/ui/button/Button'

import s from './LogOutModal.module.css'

type Props = {
  userId: string
}

export const LogOutModal = ({ userId }: Props) => {
  const router = useRouter()

  const handleLogout = async () => {
    // экшен на выход
    router.push('/login')
  }

  const handleClose = () => router.back()

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
          <Button variant="outline" onClick={handleLogout}>
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
