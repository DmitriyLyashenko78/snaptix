import { redirect } from 'next/navigation'
import { PostModal } from '@/shared/ui/modals/PostModal'

interface Props {
  params: Promise<{
    id: string
  }>
  searchParams: Promise<{
    postId?: string
    action?: string
  }>
}

export default async function ProfileModal({ params, searchParams }: Props) {
  // Ждем разрешения промисов
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams

  const { postId, action } = resolvedSearchParams
  const { id } = resolvedParams

  // Если оба параметра присутствуют, редиректим без action
  if (postId && action) {
    redirect(`/profile/${id}?postId=${postId}`)
  }

  // Открываем модалку с постом
  if (postId) {
    return <PostModal postId={postId} userId={id} />
  }

  // Открываем модалку создания поста
  if (action === 'create') {
    return <PostModal userId={id} />
  }

  // Если нет параметров, ничего не отображаем
  return null
}
