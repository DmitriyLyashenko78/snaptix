'use client'

import { createContext, useContext } from 'react'
import type { Dictionary } from './dictionaries'

const TranslationsContext = createContext<Dictionary | null>(null)

export const TranslationsProvider = ({
  children,
  translations,
}: {
  children: React.ReactNode
  translations: Dictionary
}) => {
  return <TranslationsContext.Provider value={translations}>{children}</TranslationsContext.Provider>
}

export const useTranslations = () => {
  const context = useContext(TranslationsContext)

  if (!context) {
    throw new Error('useTranslations должен использоваться внутри TranslationsProvider')
  }

  return context
}
