'use client'

import { useMutation } from '@tanstack/react-query'
import { updatePostDescription } from '@/widgets/modals/ui/post/api'

export const useChangePostDescriptMutation = () => {
  return useMutation({
    mutationFn: updatePostDescription,
  })
}
