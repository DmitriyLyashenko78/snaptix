import 'server-only'
import type { Locale } from '../config'

// Описываем структуру: ключи фиксированы, а значения могут быть любыми строками
export type Dictionary = {
  sidebar: {
    feed: string
    create: string
    myProfile: string
    messenger: string
    search: string
    statistics: string
    favorites: string
    logOut: string
  }
  postMenu: {
    edit: string
    delete: string
  }
  confirmChangePost: {
    title: string
    bodyLine1: string
    bodyLine2: string
  }
  modal: {
    confirm: string
    cancel: string
  }
  deletePost: {
    title: string
    body: string
  }
  logOut: {
    title: string
    body: string
  }
  mainPage: {
    registeredUsers: string
  }
  auth: {
    logIn: string
    signUp: string
  }
  signIn: {
    title: string
    emailLabel: string
    emailPlaceholder: string
    passwordLabel: string
    passwordPlaceholder: string
    forgotPassword: string
    submitButton: string
    noAccount: string
    signUpButton: string
  }
}

const dictionaries = {
  ru: () => import('./ru').then((module) => module.default),
  en: () => import('./en').then((module) => module.default),
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]() as Promise<Dictionary>
}
