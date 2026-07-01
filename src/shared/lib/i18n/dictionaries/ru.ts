const dict = {
  sidebar: {
    feed: 'Лента',
    create: 'Создать',
    myProfile: 'Мой профиль',
    messenger: 'Мессенджер',
    search: 'Поиск',
    statistics: 'Статистика',
    favorites: 'Избранное',
    logOut: 'Выйти',
  },
  postMenu: {
    edit: 'Редактировать',
    delete: 'Удалить',
  },
  confirmChangePost: {
    title: 'Закрыть пост',
    bodyLine1: 'Вы действительно хотите завершить редактирование?',
    bodyLine2: 'Если вы закроете окно, внесенные изменения не будут сохранены.',
  },
  modal: {
    confirm: 'Да',
    cancel: 'Нет',
  },
  deletePost: {
    title: 'Удалить пост',
    body: 'Вы уверены, что хотите удалить этот пост?',
  },
  logOut: {
    title: 'Выход из аккаунта',
    body: 'Вы действительно хотите выйти из аккаунта',
  },
  auth: {
    logIn: 'Войти',
    signUp: 'Регистрация',
  },
  signIn: {
    title: 'Вход',
    emailLabel: 'Email',
    emailPlaceholder: 'Email',
    passwordLabel: 'Пароль',
    passwordPlaceholder: 'Пароль',
    forgotPassword: 'Забыли пароль?',
    submitButton: 'Войти',
    noAccount: 'Нет аккаунта?',
    signUpButton: 'Зарегистрироваться',
  },
  mainPage: {
    registeredUsers: 'Зарегистрированные пользователи:',
  },
} as const

export default dict
export type Dictionary = typeof dict
