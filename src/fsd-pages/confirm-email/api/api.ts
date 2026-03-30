import { baseFetch } from '@/shared/api/baseFetch/baseFetch'
import {
  ConfirmEmailRequestDto,
  ConfirmEmailResponseDto,
  ResendVerificationRequestDto,
  ResendVerificationResponseDto,
} from '@/fsd-pages/confirm-email/api/dto'

export const confirmEmail = (data: ConfirmEmailRequestDto) => {
  return baseFetch<ConfirmEmailResponseDto>('/api/v1/auth/registration-confirmation', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export const resendVerificationLink = (data: ResendVerificationRequestDto) => {
  return baseFetch<ResendVerificationResponseDto>('/api/v1/auth/resend-email-confirmation-code', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
