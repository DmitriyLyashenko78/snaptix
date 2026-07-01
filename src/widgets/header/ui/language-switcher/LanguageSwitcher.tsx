'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ChevronDown } from '@/shared/ui/svg/Icon'
import s from './LanguageSwitcher.module.css'
import { languages } from '../../lib/constants/languages'
import { setLocaleCookie } from '@/shared/lib/i18n/actions'
import { LOCALE_COOKIE_NAME, DEFAULT_LOCALE, isValidLocale, type Locale } from '@/shared/lib/i18n/config'

export const LanguageSwitcher = () => {
  const router = useRouter()
  const [lang, setLang] = useState<Locale>(DEFAULT_LOCALE)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${LOCALE_COOKIE_NAME}=([^;]*)`))
    if (match) {
      const decoded = decodeURIComponent(match[1])
      // Проверяем, что декодированное значение валидное
      if (isValidLocale(decoded)) {
        setLang(decoded)
      }
    }
  }, [])

  const selectedLang = languages.find((l) => l.value === lang)

  const handleLangChange = async (value: string) => {
    // Проверяем, что значение валидное
    if (!isValidLocale(value)) return

    setLang(value)
    setIsOpen(false)

    // Вызываем Server Action для записи куки
    await setLocaleCookie(value)

    // Обновляем страницу, чтобы серверные компоненты перерисовались с новым языком
    router.refresh()
  }

  // Закрытие dropdown при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={s.langWrapper} ref={dropdownRef}>
      <div className={`${s.customSelect} ${isOpen ? s.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div className={s.selectedOption}>
          {selectedLang && (
            <>
              <div className={s.flagContainer}>
                <Image src={selectedLang.flag} alt={selectedLang.label} width={20} height={20} className={s.flagIcon} />
              </div>
              <span>{selectedLang.label}</span>
            </>
          )}
        </div>
        <ChevronDown className={`${s.chevronIcon} ${isOpen ? s.rotated : ''}`} />
      </div>

      {isOpen && (
        <div className={s.dropdown}>
          {languages.map((language) => (
            <div
              key={language.value}
              className={`${s.dropdownItem} ${language.value === lang ? s.active : ''}`}
              onClick={() => handleLangChange(language.value)}
            >
              <div className={s.flagContainer}>
                <Image src={language.flag} alt={language.label} width={20} height={20} className={s.flagIcon} />
              </div>
              <span>{language.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
