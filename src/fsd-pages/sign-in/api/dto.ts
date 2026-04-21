export type LoginRequestDto = {
  email: string
  password: string
}

export type LoginResponseDto = {
  accessToken: string
}

export type LoginErrorDto = {
  message: 'EMAIL_OR_PASSWORD_EXIST' | (string & {})
}
