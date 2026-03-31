'use client'

import s from './page.module.css'
import { Post } from '@/entities/post/Post'
import type { PostProps } from '@/entities/post/Post.types'
import { usePostsQuery } from '@/features/posts/model/getPosts.query'

export default function MainPage() {
  const usersCount = '009213'.split('')

  const { data, isLoading, isError } = usePostsQuery(0)

  if (isLoading) return <div>Загрузка...</div>
  if (isError) return <div>Ошибка загрузки</div>

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
      <section className={s.posts}>{data?.items.map((post: PostProps) => <Post key={post.id} {...post} />)}</section>
    </section>
  )
}
