import styles from './LanguageSwitcher.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown } from '@/public/icons/chevronDown'
const flagRu = '@/public/icons/flag-russia.png'
const flagUk = '@/public/icons/flag-united-kingdom.png'

type Language = {
  code: string
  label: string
  flag: string
}

export const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState<string>('ru')

  const flagSrc: string = language === 'ru' ? '/icons/flag-russia.png' : '/icons/flag-united-kingdom.png'
  const languages: Language[] = [
    { code: 'ru', label: 'RU', flag: '/icons/flag-russia.png' },
    { code: 'en', label: 'EN', flag: '/icons/flag-united-kingdom.png' },
  ]

  const onChooseLanguage = (code: string) => {
    setLanguage(code)
    onIsOpen()
  }

  const onIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.languageSwitcher}>
      <Image className={styles.flag} src={flagSrc} alt={language} width={24} height={24} />

      <div>
        <button className={`${styles.arrow} ${isOpen ? styles.rotating : ''}`} onClick={() => onIsOpen()}>
          <ChevronDown />
        </button>
        {isOpen && (
          <div className={`${styles.dropdown} ${styles.arrow}`}>
            {languages.map((lang) => (
              <button key={lang.code} className="item">
                <Image
                  className={styles.flag}
                  src={lang.flag}
                  alt={lang.label}
                  onClick={() => onChooseLanguage(lang.code)}
                  width={24}
                  height={24}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
