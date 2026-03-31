'use client'

import { useState } from 'react'

import Image from 'next/image'
import s from './Post.module.css'
import type { PostProps } from '@/entities/post/Post.types'
import { getPostCreatedTime } from '@/shared/utils/getPostCreatedTime'
import defaultAvatar from '@/public/png/userAvatar.png'

export const Post = ({ images, avatarOwner, userName, description, createdAt }: PostProps) => {
  const [isOpenedText, setIsOpenedText] = useState<boolean>(false)

  const isLongText = description.length > 100

  const imageUrl = images?.[0]?.url

  const userAvatar = avatarOwner ? avatarOwner : defaultAvatar

  return (
    <article className={s.card}>
      <section className={s.cover}>
        <Image src={imageUrl} alt={'post image'} width={234} height={240} />
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
