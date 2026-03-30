export type SignUpRequestDto = {
  username: string
  email: string
  password: string
}

export type SignUpResponseDto = {
  success: boolean
}

export type SignUpErrorDto = {
  message: 'EMAIL_EXISTS' | 'USERNAME_EXISTS' | (string & {})
}
