'use client'

import { useMutation } from '@tanstack/react-query'
import { resendVerificationLink } from '@/fsd-pages/confirm-email/api'
import type {
  ConfirmEmailErrorDto,
  ResendVerificationRequestDto,
  ResendVerificationResponseDto,
} from '@/fsd-pages/confirm-email/api'

type Options = {
  onSuccess?: (data: ResendVerificationResponseDto) => void
  onError?: (error: ConfirmEmailErrorDto) => void
}

export const useResendVerificationMutation = (options?: Options) => {
  return useMutation<ResendVerificationResponseDto, ConfirmEmailErrorDto, ResendVerificationRequestDto>({
    mutationFn: resendVerificationLink,
    ...options,
  })
}
