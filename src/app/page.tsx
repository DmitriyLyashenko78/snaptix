'use client'

import s from './page.module.css'
import { usePostsQuery } from '@/features/main-page-all-posts/hooks/use-get-posts-query'
import { SmallPost } from '@/entities/post/ui/small-post/SmallPost'

export type Media = {
  mediaId: string
  url: string
}

export type Post = {
  id: string
  description: string | null
  media: Media[]
  updatedAt: string
  createdAt: string
  owner: {
    firstName: string
    lastName: string
    avatar: string | null
  }
}

export default function MainPage() {
  const usersCount = '009213'.split('')

  const { data } = usePostsQuery({})

  const posts = data?.pages.flatMap((page) => page.posts) ?? []

  return (
    <section className={s.content}>
      <section className={s.counter}>
        <h2>Registered users:</h2>
        <div className={s.digits}>
          {usersCount.map((digit, i) => (
            <h2 key={i} className={s.digit}>
              {digit}
            </h2>
          ))}
        </div>
      </section>
      <section className={s.posts}>
        {posts.map((post) => (
          <SmallPost firstName={''} key={post.id} {...post} />
        ))}
      </section>
    </section>
  )
}
