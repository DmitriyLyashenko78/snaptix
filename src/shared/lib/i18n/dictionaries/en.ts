const dict = {
  sidebar: {
    feed: 'Feed',
    create: 'Create',
    myProfile: 'My Profile',
    messenger: 'Messenger',
    search: 'Search',
    statistics: 'Statistics',
    favorites: 'Favorites',
    logOut: 'Log Out',
  },
  postMenu: {
    edit: 'Edit Post',
    delete: 'Delete Post',
  },
  confirmChangePost: {
    title: 'Close Post',
    bodyLine1: 'Do you really want to finish editing?',
    bodyLine2: 'If you close, the changes you have made will not be saved.',
  },
  modal: {
    confirm: 'Yes',
    cancel: 'No',
  },
  deletePost: {
    title: 'Delete Post',
    body: 'Are you sure you want to delete this post?',
  },
  logOut: {
    title: 'Log out',
    body: 'Do you really want to log out of your account',
  },
  auth: {
    logIn: 'Log in',
    signUp: 'Sign up',
  },
  signIn: {
    title: 'Sign In',
    emailLabel: 'Email',
    emailPlaceholder: 'Email',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Password',
    forgotPassword: 'Forgot Password?',
    submitButton: 'Sign In',
    noAccount: "Don't have an account?",
    signUpButton: 'Sign Up',
  },
  mainPage: {
    registeredUsers: 'Registered users:',
  },
} as const

export default dict
export type Dictionary = typeof dict
