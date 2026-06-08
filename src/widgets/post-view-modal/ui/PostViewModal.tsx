'use client'

import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import s from './PostViewModal.module.css'
import { PostLayout } from '@/entities/post/ui/PostLayout'
import { CrossWhiteIcon } from '@/shared/ui/svg/Icon'
import { getPostCreatedTime } from '@/shared/utils/getPostCreatedTime'
import defaultAvatar from '@/public/png/userAvatar.png'
import type { PostWithOwner } from '@/entities/post/ui/Post.types'

type PostViewModalProps = {
  post: PostWithOwner
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
  const avatarSrc = post.owner.avatar ?? defaultAvatar

  return (
    <div className={s.overlay} onClick={handleOverlayClick}>
      <button className={s.closeOutside} onClick={close} aria-label="Закрыть">
        <CrossWhiteIcon />
      </button>

      <div className={s.modalContent} role="dialog" aria-modal="true" tabIndex={-1}>
        <PostLayout variant="large" images={post.media}>
          <div className={s.wrapper}>
            <header className={s.authorHeader}>
              <Image src={avatarSrc} alt="" width={36} height={36} className={s.avatar} />
              <span className={s.userName}>{post.owner.username}</span>
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
