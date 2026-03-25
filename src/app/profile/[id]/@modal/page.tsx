'use client'

import { useRouter } from 'next/navigation'
import React, { use } from 'react'
import { Modal } from '@/shared/ui/modalsPost/Modal'
import { LogOutModal } from '@/widgets/modals'

interface Props {
  params: Promise<{
    id: string
  }>
  searchParams: Promise<{
    postId?: string
    action?: string
  }>
}

export default function ProfileModal({ params, searchParams }: Props) {
  const router = useRouter()

  const resolvedParams = use(params)
  const resolvedSearchParams = use(searchParams)

  const { postId, action } = resolvedSearchParams
  const { id } = resolvedParams

  // Функция закрытия - вызывается когда модалка меняет состояние
  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      // Если модалка закрылась, редиректим обратно
      router.back()
    }
  }

  // Если оба параметра присутствуют
  if (postId && action) {
    router.push(`/profile/${id}?postId=${postId}`)
    return null
  }

  // Модалка просмотра поста
  if (postId) {
    return (
      <Modal open={true} onOpenChangeAction={handleOpenChange} title="Просмотр поста">
        <div>Содержимое поста с ID: {postId}</div>
      </Modal>
    )
  }

  // Модалка создания поста
  if (action === 'create') {
    return (
      <Modal open={true} onOpenChangeAction={handleOpenChange} title="Создать пост">
        <div>Форма создания поста</div>
      </Modal>
    )
  }

  if (action === 'logout') {
    return <LogOutModal userId={id} />
  }

  // Если нет параметров, ничего не отображаем
  return null
}
