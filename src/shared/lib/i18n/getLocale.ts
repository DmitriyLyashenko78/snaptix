import { cookies, headers } from 'next/headers'
import { DEFAULT_LOCALE, LOCALE_COOKIE_NAME, type Locale, isValidLocale } from './config'

export async function getLocale(): Promise<Locale> {
  // 1. Кука (приоритет №1)
  const cookieStore = await cookies()
  const cookieLocale = cookieStore.get(LOCALE_COOKIE_NAME)?.value

  if (cookieLocale && isValidLocale(cookieLocale)) {
    return decodeURIComponent(cookieLocale) as Locale
  }

  // 2. Accept-Language из браузера
  const headersList = await headers()
  const acceptLanguage = headersList.get('accept-language') || ''

  if (acceptLanguage.toLowerCase().includes('ru')) {
    return 'ru'
  }

  // 3. Дефолт
  return DEFAULT_LOCALE
}
