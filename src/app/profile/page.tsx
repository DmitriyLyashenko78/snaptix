import { redirect } from 'next/navigation'

export default function ProfilePage() {
  // Проверяем авторизацию
  const isAuthenticated = true

  if (!isAuthenticated) {
    redirect('/')
  }

  // ID текущего пользователя (нужно получать из сессии/токена)
  const currentUserId = 123 // Заменить на реальное получение ID

  redirect(`/profile/${currentUserId}`)
}
