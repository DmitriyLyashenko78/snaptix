'use client'
import { ChangeEvent, useState } from 'react'
import Link from 'next/link'
import s from './Header.module.css'
import { Button } from '@/shared/ui/button-fix/Button'

interface Props {
  isAuth?: boolean
}

export const Header = ({ isAuth }: Props) => {
  const [lang, setLang] = useState('en')

  const handleLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value)
  }

  return (
    // <header className={s.header}>
    <header>
      <div className={s.container}>
        <Link href="/" className={s.logo}>
          Snaptix
        </Link>

        <div className={s.nav}>
          {/* Селект выбора языка */}
          <div className={s.langWrapper}>
            <select value={lang} onChange={handleLangChange} className={s.select}>
              <option value="en">🇬🇧 English</option>
              <option value="ru">🇷🇺 Russian</option>
            </select>
          </div>

          {isAuth ? (
            <div className={s.authActions}>
              <div className={s.notificationWrapper}>
                <span style={{ fontSize: '20px', color: 'white' }}>🔔</span>
                <span className={s.badge}>1</span>
              </div>
            </div>
          ) : (
            <div className={s.guestActions}>
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
