'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { getPosts } from '@/features/posts/api'

export const usePostsQuery = (params: { pageSize?: number }) => {
  return useInfiniteQuery({
    queryKey: ['posts', 'all', params],
    queryFn: ({ pageParam = 0 }) =>
      getPosts({
        endCursorPostId: pageParam,
        pageSize: params.pageSize,
      }),
    getNextPageParam: (lastPage) => {
      if (!lastPage.items.length) {
        return null
      }

      return lastPage.items[lastPage.items.length - 1].id
    },

    initialPageParam: 0,
  })
}
