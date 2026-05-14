'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { logout } from '../logout'

export const useLogout = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.clear()
      router.push('/signIn')
    },
    onError: (error) => {
      console.error('Ошибка при выходе:', error)
    },
  })
}
