'use client'

import s from './page.module.css'
import { Post } from '@/entities/post/ui/small-post/Post'
import { usePostsQuery } from '@/features/posts/hooks/use-get-posts-query'

export default function MainPage() {
  const usersCount = '009213'.split('')

  const { data } = usePostsQuery({})

  const posts = data?.pages.flatMap((page) => page.items) ?? []

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
          <Post key={post.id} {...post} />
        ))}
      </section>
    </section>
  )
}
