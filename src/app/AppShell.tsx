'use client'

import { Header } from '@/widgets/header'
import { SidebarList } from '@/shared/ui/sidebar/SidbarList'
import { useAuthStatus } from '@/shared/api/auth'
import s from './Layout.module.css'

const SIDEBAR_SKELETON_ITEMS = 7

const SidebarSkeleton = () => (
  <div className={s.sidebarSkeleton} aria-hidden="true">
    {Array.from({ length: SIDEBAR_SKELETON_ITEMS }).map((_, i) => (
      <span key={i} className={s.sidebarSkeletonItem} />
    ))}
  </div>
)

/**
 * Клиентская оболочка приложения.
 * Авторизацию проверяем на клиенте через /me (UC-2): пока ответа нет — skeleton
 * в header и на месте сайдбара; после ответа показываем нужный набор элементов.
 */
export const AppShell = ({ children }: { children: React.ReactNode }) => {
  const { isAuth, isLoading } = useAuthStatus()

  return (
    <>
      <Header isAuth={isAuth} isLoading={isLoading} />
      <div className={s.content}>
        {isLoading ? <SidebarSkeleton /> : isAuth ? <SidebarList /> : null}
        <main className={`${s.main} ${!isAuth && !isLoading ? s.mainCentered : ''}`}>{children}</main>
      </div>
    </>
  )
}
