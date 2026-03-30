'use client'

import { useMutation } from '@tanstack/react-query'
import { confirmEmail } from '@/fsd-pages/confirm-email/api'
import type {
  ConfirmEmailErrorDto,
  ConfirmEmailRequestDto,
  ConfirmEmailResponseDto,
} from '@/fsd-pages/confirm-email/api'

type Options = {
  onSuccess?: (data: ConfirmEmailResponseDto) => void
  onError?: (error: ConfirmEmailErrorDto) => void
}

export const useConfirmEmailMutation = (options?: Options) => {
  return useMutation<ConfirmEmailResponseDto, ConfirmEmailErrorDto, ConfirmEmailRequestDto>({
    mutationFn: confirmEmail,
    ...options,
  })
}
