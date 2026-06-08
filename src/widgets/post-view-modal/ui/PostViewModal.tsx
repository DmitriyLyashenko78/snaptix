'use client'

import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import s from './PostViewModal.module.css'
import { PostLayout } from '@/entities/post/ui/PostLayout'
import { CrossWhiteIcon } from '@/shared/ui/svg/Icon'
import { getPostCreatedTime } from '@/shared/utils/getPostCreatedTime'
import defaultAvatar from '@/public/png/userAvatar.png'
import type { Post } from '@/entities/post/ui/Post.types'

type PostViewModalProps = {
  post: Post
  /** id автора из маршрута /profile/[authorId] — фолбэк при закрытии по прямой ссылке */
  authorId: string
}

export const PostViewModal = ({ post, authorId }: PostViewModalProps) => {
  const router = useRouter()

  const close = useCallback(() => {
    // Переход внутри приложения (с главной / профиля) — возвращаемся назад.
    // Прямая ссылка (своей истории нет) — на профиль автора.
    if (window.history.length > 1) {
      router.back()
    } else {
      router.replace(`/profile/${authorId}`)
    }
  }, [router, authorId])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [close])

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) close()
  }

  const createdAt = post.createdAt ? getPostCreatedTime(post.createdAt) : ''

  return (
    <div className={s.overlay} onClick={handleOverlayClick}>
      <button className={s.closeOutside} onClick={close} aria-label="Закрыть">
        <CrossWhiteIcon />
      </button>

      <div className={s.modalContent} role="dialog" aria-modal="true" tabIndex={-1}>
        <PostLayout variant="large" images={post.media}>
          <div className={s.wrapper}>
            {/* TODO: имя/аватар автора недоступны в API (нет owner в GET /posts/{id}
                и нет публичного профиль-эндпоинта по userId). Подставить, когда бэкенд добавит. */}
            <header className={s.authorHeader}>
              <Image src={defaultAvatar} alt="" width={36} height={36} className={s.avatar} />
              <span className={s.userName}>UserName</span>
            </header>

            <section className={s.body}>
              {post.description && <p className={s.description}>{post.description}</p>}
              {createdAt && <time className={s.time}>{createdAt}</time>}
            </section>
          </div>
        </PostLayout>
      </div>
    </div>
  )
}
