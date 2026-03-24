import { FieldValues, UseFormSetError } from 'react-hook-form'
import { SignUpErrorDto } from '@/fsd-pages/sign-up/api'

export const mapServerErrors = <T extends FieldValues>(error: SignUpErrorDto, setError: UseFormSetError<T>) => {
  switch (error.message) {
    case 'EMAIL_EXISTS':
      setError('email' as any, {
        message: 'User with this email is already registered',
      })
      break
    case 'USERNAME_EXISTS':
      setError('username' as any, {
        message: 'User with this username is already registered',
      })
      break
  }
}
