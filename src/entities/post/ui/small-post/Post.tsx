'use client'

import { useState } from 'react'

import Image from 'next/image'
import s from './Post.module.css'
import { getPostCreatedTime } from '@/shared/utils/getPostCreatedTime'
import defaultAvatar from '@/public/png/userAvatar.png'
import type { PostProps } from '@/entities/post/ui/Post.types'
import { PostLayout } from '@/entities/post/ui/PostLayout'

export const Post = ({ images, avatarOwner, userName, description, createdAt }: PostProps) => {
  const [isOpenedText, setIsOpenedText] = useState<boolean>(false)

  const isLongText = description.length > 100
  const userAvatar = avatarOwner ? avatarOwner : defaultAvatar

  return (
    <PostLayout images={images} variant={'small'}>
      <article className={s.smallCardWrapper}>
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
    </PostLayout>
  )
}
