import { getPaginationPages } from '@/src/shared/utils/getPaginationPages'
import s from './Pagination.module.css'
import type { PaginationProps } from './Pagination.types'

export const Pagination = ({ currentPage, setCurrentPage, pagesCount }: PaginationProps) => {
  if (pagesCount <= 1) {
    return null
  }

  const pages = getPaginationPages(currentPage, pagesCount)

  return (
    <section className={s.pagination}>
      {pages.map((page, id) =>
        page === '...' ? (
          <span className={s.ellipsis} key={`ellipsis-${id}`}>
            ...
          </span>
        ) : (
          <button
            key={page}
            className={page === currentPage ? `${s.pageButton} ${s.pageButtonActive}` : s.pageButton}
            onClick={() => page !== currentPage && setCurrentPage(Number(page))}
            disabled={page === currentPage}
            type={'button'}
          >
            {page}
          </button>
        ),
      )}
    </section>
  )
}
