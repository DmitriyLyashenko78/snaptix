import { useState } from 'react'
import Image from 'next/image'

import styles from './LanguageSwitcher.module.scss'

import { ChevronDown } from '@/src/shared/ui/SVG/chevronDown'
import { Language, LanguageCode, LanguageSwitcherProps } from '@/src/feauters/languageSwitcher/LanguageSwitcher.types'

const flagRu = '/icons/flag-russia.png'
const flagUk = '/icons/flag-united-kingdom.png'

const languages: Language[] = [
  { code: 'ru', label: 'RU', flag: flagRu },
  { code: 'en', label: 'EN', flag: flagUk },
]

export const LanguageSwitcher = ({ language, onLanguageChange }: LanguageSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const flagSrc = language === 'ru' ? flagRu : flagUk

  const handleChooseLanguage = (lang: LanguageCode) => {
    onLanguageChange(lang)
    setIsOpen(false)
  }

  const toggleOpen = () => setIsOpen((prev) => !prev)

  return (
    <div className={styles.languageSwitcher}>
      <Image className={styles.flag} src={flagSrc} alt={language} width={24} height={24} />

      <div>
        <button
          type="button"
          className={`${styles.arrow} ${isOpen ? styles.rotating : ''}`}
          onClick={() => toggleOpen()}
        >
          <ChevronDown />
        </button>
        {isOpen && (
          <div className={`${styles.dropdown} ${styles.arrow}`}>
            {languages.map((lang) => (
              <button key={lang.code} className="item" onClick={() => handleChooseLanguage(lang.code)}>
                <Image className={styles.flag} src={lang.flag} alt={lang.label} width={24} height={24} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
