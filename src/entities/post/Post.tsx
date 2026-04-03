'use client'

import { useState } from 'react'

import Image from 'next/image'
import s from './Post.module.css'
import type { PostProps } from '@/entities/post/Post.types'
import { getPostCreatedTime } from '@/shared/utils/getPostCreatedTime'
import defaultAvatar from '@/public/png/userAvatar.png'
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/ui/svg/Icon'

export const Post = ({ images, avatarOwner, userName, description, createdAt }: PostProps) => {
  const [isOpenedText, setIsOpenedText] = useState<boolean>(false)
  const [currentImageId, setCurrentImageId] = useState(0)

  const isLongText = description.length > 100
  const hasMultipleImages = images?.length > 1

  const currentImageUrl = images?.[currentImageId]?.url || ''
  const userAvatar = avatarOwner ? avatarOwner : defaultAvatar

  const prevImage = () => {
    if (currentImageId > 0) {
      setCurrentImageId((prev) => prev - 1)
    }
  }
  const nextImage = () => {
    if (currentImageId < images.length - 1) {
      setCurrentImageId((prev) => prev + 1)
    }
  }

  return (
    <article className={s.card}>
      <section className={s.cover}>
        <Image src={currentImageUrl} alt={'post image'} width={234} height={240} />
        {hasMultipleImages && (
          <div className={s.controls}>
            {currentImageId > 0 && (
              <button className={`${s.arrow} ${s.prevArrow}`} onClick={prevImage}>
                <ArrowLeftIcon />
              </button>
            )}
            {currentImageId < images.length - 1 && (
              <button className={`${s.arrow} ${s.nextArrow}`} onClick={nextImage}>
                <ArrowRightIcon />
              </button>
            )}

            <div className={s.pagination}>
              {images.map((_, i) => (
                <span key={i} className={`${s.dot} ${i === currentImageId ? s.activeDot : ''}`} />
              ))}
            </div>
          </div>
        )}
      </section>
      <section className={s.author}>
        <Image src={userAvatar} alt={'user avatar'} width={36} height={36} className={s.avatar} />
        <h3>{userName}</h3>
      </section>
      <time className={s.time}>{getPostCreatedTime(createdAt)}</time>
      <section className={s.description}>
        <div className={`${s.text} ${!isOpenedText ? s.collapsed : ''}`}>{description}</div>
        {isLongText && (
          <span className={s.click} onClick={() => setIsOpenedText(!isOpenedText)}>
            {isOpenedText ? 'Hide' : 'Show more'}
          </span>
        )}
      </section>
    </article>
  )
}
