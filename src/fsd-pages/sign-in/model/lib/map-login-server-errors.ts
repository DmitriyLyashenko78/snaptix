import { FieldValues, Path, UseFormSetError } from 'react-hook-form'
import type { LoginErrorDto } from '@/fsd-pages/sign-in/api/dto'

export const mapLoginServerErrors = <T extends FieldValues>(error: LoginErrorDto, setError: UseFormSetError<T>) => {
  switch (error.message) {
    case 'EMAIL_OR_PASSWORD_EXIST':
      setError('email' as Path<T>, {
        message: 'Incorrect email or password',
      })
      setError('password' as Path<T>, {
        message: 'Incorrect email or password',
      })
      break
    default:
      setError('root' as Path<T>, {
        message: 'Something went wrong. Please try again later.',
      })
      break
  }
}
