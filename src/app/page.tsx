import s from './page.module.css'
import { SmallPost } from '@/entities/post/ui/small-post/SmallPost'
import { getLatestPostsServer, getRegisteredUsersCountServer } from '@/features/main-page-all-posts/api'

export const revalidate = 60

const COUNTER_WIDTH = 6
const POSTS_PAGE_SIZE = 4

const formatCounter = (value: number): string[] =>
  Math.max(0, Math.trunc(value)).toString().padStart(COUNTER_WIDTH, '0').split('')

export default async function MainPage() {
  const [{ posts }, { registeredUsersCount }] = await Promise.all([
    getLatestPostsServer(POSTS_PAGE_SIZE),
    getRegisteredUsersCountServer(),
  ])

  const counterDigits = formatCounter(registeredUsersCount)

  return (
    <section className={s.content}>
      <section className={s.counter}>
        <h2>Registered users:</h2>
        <div className={s.digits}>
          {counterDigits.map((digit, i) => (
            <h2 key={i} className={s.digit}>
              {digit}
            </h2>
          ))}
        </div>
      </section>
      <section className={s.posts}>
        {posts.map((post) => (
          <SmallPost key={post.id} {...post} />
        ))}
      </section>
    </section>
  )
}
