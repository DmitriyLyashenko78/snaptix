'use client'

import { redirect } from 'next/navigation'

export const Profile = () => {
  // Проверяем авторизацию
  const isAuthenticated = true

  if (!isAuthenticated) {
    redirect('/')
  }

  // ID текущего пользователя (нужно получать из сессии/токена)
  const currentUserId = 123 // Заменить на реальное получение ID

  redirect(`/profile/${currentUserId}`)

  return <div>Profile</div>
}
