'use client'
import Link from 'next/link'
import s from './Header.module.css'
import { Button } from '@/shared/ui/button/Button'
import { LanguageSelect } from './language-switcher/LanguageSwitcher'
import { NotificationBell } from '@/widgets/header/ui/notification-bell/NotificationBell'

import { toggleAuthAction } from '@/app/actions/actions'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

interface Props {
  isAuth?: boolean
}

export const Header = ({ isAuth }: Props) => {
  const handleLanguageChange = (value: string) => {
    console.log(value)
    // Здесь будет логика смены языка
  }

  //времманя логика перключения isAuth
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleToggle = () => {
    // Используем серверный экшен вместо document.cookie
    startTransition(async () => {
      await toggleAuthAction()
      router.refresh()
    })
  }

  return (
    <header>
      <div className={s.container}>
        <Link href="/" className={s.logo}>
          Snaptix
        </Link>

        {/*временная кнопка*/}
        <button onClick={handleToggle} disabled={isPending} style={{ opacity: isPending ? 0.5 : 1, padding: '10px' }}>
          {isAuth ? 'Выйти' : 'Войти'}
        </button>

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
