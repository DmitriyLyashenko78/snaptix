'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Props {
  params: Promise<{ id: string }>
  searchParams: Promise<{ postId?: string; action?: string }>
}

export default function UserProfilePage({ params, searchParams }: Props) {
  const router = useRouter()
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null)
  const [resolvedSearchParams, setResolvedSearchParams] = useState<{ postId?: string; action?: string } | null>(null)

  // Разворачиваем Promise'ы
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParamsData = await params
      const resolvedSearchParamsData = await searchParams
      setResolvedParams(resolvedParamsData)
      setResolvedSearchParams(resolvedSearchParamsData)
    }
    resolveParams()
  }, [params, searchParams])

  if (!resolvedParams || !resolvedSearchParams) {
    return <div>Загрузка...</div> // Показываем загрузку, пока параметры не зарезолвятся
  }

  const isMyProfile = '123'
  // const { postId, action } = resolvedSearchParams

  // Функция для открытия модалки с постом
  const openPostModal = (postNumber: number) => {
    const postId = (100 + postNumber).toString()
    router.push(`/profile/${resolvedParams.id}?postId=${postId}`)
  }

  return (
    <div>
      <h1>Профиль пользователя {resolvedParams.id}</h1>

      {isMyProfile && (
        <div>
          <span>Пользователь {resolvedParams.id} авторизован</span>
          <div>Отображаем SIDEBAR</div>
          <button
            onClick={() => router.push(`/profile/${resolvedParams.id}?action=create`)}
            style={{
              marginLeft: '20px',
              padding: '5px 10px',
              background: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            + Создать пост
          </button>
        </div>
      )}

      <div className="posts">
        <div
          onClick={() => openPostModal(1)}
          style={{
            padding: '10px',
            margin: '5px',
            cursor: 'pointer',
            border: '1px solid #ccc',
          }}
        >
          Пост 1
        </div>
        <div
          onClick={() => openPostModal(2)}
          style={{
            padding: '10px',
            margin: '5px',
            cursor: 'pointer',
            border: '1px solid #ccc',
          }}
        >
          Пост 2
        </div>
        <div
          onClick={() => openPostModal(3)}
          style={{
            padding: '10px',
            margin: '5px',
            cursor: 'pointer',
            border: '1px solid #ccc',
          }}
        >
          Пост 3
        </div>
      </div>
    </div>
  )
}
