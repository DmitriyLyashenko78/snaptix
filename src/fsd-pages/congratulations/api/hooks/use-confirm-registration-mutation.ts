'use client'

import { useMutation } from '@tanstack/react-query'
import { confirmRegistration } from '@/fsd-pages/congratulations/api'
import type {
  ConfirmRegistrationErrorDto,
  ConfirmRegistrationRequestDto,
  ConfirmRegistrationResponseDto,
} from '@/fsd-pages/congratulations/api'

type Options = {
  onSuccess?: (data: ConfirmRegistrationResponseDto) => void
  onError?: (error: ConfirmRegistrationErrorDto) => void
}

export const useConfirmRegistrationMutation = (options?: Options) => {
  return useMutation<ConfirmRegistrationResponseDto, ConfirmRegistrationErrorDto, ConfirmRegistrationRequestDto>({
    mutationFn: confirmRegistration,
    ...options,
  })
}
