'use client'
import Link from 'next/link'
import s from './Header.module.css'
import { Button } from '@/shared/ui/button/Button'
import { LanguageSelect } from './language-switcher/LanguageSwitcher'
import { NotificationBell } from '@/widgets/header/ui/notification-bell/NotificationBell'

interface Props {
  isAuth?: boolean
  isLoading?: boolean
}

export const Header = ({ isAuth, isLoading }: Props) => {
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
          {isLoading ? (
            // Пока нет ответа /me — skeleton вместо кнопок авторизации.
            <div className={s.guestActions} aria-hidden="true">
              <span className={`${s.skeleton} ${s.skeletonSelect}`} />
              <span className={`${s.skeleton} ${s.skeletonBtn}`} />
              <span className={`${s.skeleton} ${s.skeletonBtn}`} />
            </div>
          ) : isAuth ? (
            <div className={s.authActions}>
              <div className={s.notificationWrapper}>
                <NotificationBell />
              </div>
              <LanguageSelect onLanguageChange={handleLanguageChange} />
            </div>
          ) : (
            <div className={s.guestActions}>
              <LanguageSelect onLanguageChange={handleLanguageChange} />
              <Link href="/signIn" className={s.loginBtn}>
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
