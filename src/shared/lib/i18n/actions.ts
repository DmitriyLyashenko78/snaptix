'use server'

import { cookies } from 'next/headers'
import { LOCALE_COOKIE_NAME, isValidLocale, type Locale } from './config'

export async function setLocaleCookie(locale: Locale): Promise<void> {
  // Валидация на всякий случай
  if (!isValidLocale(locale)) {
    throw new Error(`Invalid locale: ${locale}`)
  }

  const cookieStore = await cookies()

  // Устанавливаем куку на 1 год
  cookieStore.set(LOCALE_COOKIE_NAME, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 год в секундах
    sameSite: 'lax',
  })
}
