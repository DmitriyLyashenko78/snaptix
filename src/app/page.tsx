import s from './page.module.css'
import { SmallPost } from '@/entities/post/ui/small-post/SmallPost'
import { getLatestPostsServer, getRegisteredUsersCountServer } from '@/features/main-page-all-posts/api'

export const dynamic = 'force-dynamic'

const COUNTER_WIDTH = 6
const POSTS_PAGE_SIZE = 4

const formatCounter = (value: number): string[] =>
  Math.max(0, Math.trunc(value)).toString().padStart(COUNTER_WIDTH, '0').split('')

// Если бэкенд недоступен — логируем ошибку, но не роняем страницу,
// а отдаём фолбэк, чтобы главная всё равно отрендерилась.
const safe = async <T,>(promise: Promise<T>, fallback: T, label: string): Promise<T> => {
  try {
    return await promise
  } catch (error) {
    console.error(`[MainPage] ${label} failed:`, error)
    return fallback
  }
}

export default async function MainPage() {
  const [{ posts }, { registeredUsersCount }] = await Promise.all([
    safe(getLatestPostsServer(POSTS_PAGE_SIZE), { posts: [] }, 'latest-posts'),
    safe(getRegisteredUsersCountServer(), { registeredUsersCount: 0 }, 'registered-users-count'),
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
