'use client'
import Link from 'next/link'
import s from './Header.module.css'
import { Button } from '@/shared/ui/button/Button'
import { LanguageSelect } from './language-switcher/LanguageSwitcher'
import { NotificationBell } from '@/widgets/header/ui/notification-bell/NotificationBell'

interface Props {
  isAuth?: boolean
}

export const Header = ({ isAuth }: Props) => {
  const handleLanguageChange = (value: string) => {
    console.log(value)
    // Здесь будет логика смены языка
  }

  return (
    <header>
      <div className={s.container}>
        <Link href="/" className={s.logo}>
          Snaptix
        </Link>

        <div className={s.nav}>
          {isAuth ? (
            <div className={s.authActions}>
              <div className={s.notificationWrapper}>
                <NotificationBell />
              </div>
              <LanguageSelect onLanguageChange={handleLanguageChange} />
            </div>
          ) : (
            <div className={s.guestActions}>
              <LanguageSelect onLanguageChange={handleLanguageChange} />
              <Link href="/login" className={s.loginBtn}>
                Log in
              </Link>
              <Link href="/signup">
                <Button variant="primary">Sign up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
