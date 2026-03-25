'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronDown } from '@/shared/ui/svg/Icon'
import s from './LanguageSwitcher.module.css'
import { languages } from '../../lib/constants/languages'

interface LanguageSelectProps {
  onLanguageChange?: (value: string) => void
}

export const LanguageSelect = ({ onLanguageChange }: LanguageSelectProps) => {
  const [lang, setLang] = useState('en')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedLang = languages.find((l) => l.value === lang)

  const handleLangChange = (value: string) => {
    setLang(value)
    setIsOpen(false)
    onLanguageChange?.(value)
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
