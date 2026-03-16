import { StaticImageData } from 'next/image'

export type LanguageCode = 'ru' | 'en'

export type Language = {
  code: LanguageCode
  label: string
  flag: string
}

export type LanguageSwitcherProps = {
  language: LanguageCode
  onLanguageChange: (lang: LanguageCode) => void
}
