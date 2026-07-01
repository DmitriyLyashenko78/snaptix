import { cookies } from 'next/headers'
import { DEFAULT_LOCALE, LOCALE_COOKIE_NAME, type Locale, isValidLocale } from './config'

export async function getLocale(): Promise<Locale> {
  // Добавили await, так как в новых версиях Next.js cookies() возвращает Promise
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get(LOCALE_COOKIE_NAME)?.value

  if (localeCookie && isValidLocale(localeCookie)) {
    return localeCookie
  }

  return DEFAULT_LOCALE
}
