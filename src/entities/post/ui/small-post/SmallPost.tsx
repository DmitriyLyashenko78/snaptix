'use client'

import { useState } from 'react'

import Image from 'next/image'
import s from './SmallPost.module.css'
import { getPostCreatedTime } from '@/shared/utils/getPostCreatedTime'
import defaultAvatar from '@/public/png/userAvatar.png'
import { PostLayout } from '@/entities/post/ui/PostLayout'
import type { Post } from '@/app/page'

export type SmallPostProps = Omit<Post, 'owner'> & {
  firstName: string
  avatar?: string | null
}

export const SmallPost = ({ media, avatar, firstName, description, createdAt }: SmallPostProps) => {
  const [isOpenedText, setIsOpenedText] = useState<boolean>(false)

  const isLongText = description ? description.length > 100 : false
  const userAvatar = avatar ? avatar : defaultAvatar

  return (
    <PostLayout images={media} variant={'small'}>
      <article className={s.smallCardWrapper}>
        <section className={s.author}>
          <Image src={userAvatar} alt={'user avatar'} width={36} height={36} className={s.avatar} />
          <h3>{firstName}</h3>
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
