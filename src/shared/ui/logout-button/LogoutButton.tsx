'use client'

import { LogoutIcon } from '@/shared/ui/svg/Icon'
import s from './LogoutButton.module.css'

type LogoutButtonProps = {
  onClick?: () => void
}

export const LogoutButton = ({ onClick }: LogoutButtonProps) => {
  return (
    <button className={s.logoutBtn} onClick={onClick}>
      <LogoutIcon />
      <span>Log Out</span>
    </button>
  )
}
