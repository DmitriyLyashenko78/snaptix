'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { getPosts } from '../api'

export const usePostsQuery = (params: { pageSize?: number }) => {
  return useInfiniteQuery({
    queryKey: ['posts', 'all', params],
    queryFn: () =>
      getPosts({
        pageSize: params.pageSize,
      }),
    getNextPageParam: (lastPage) => {
      if (!lastPage.posts || !lastPage.posts.length) {
        return null
      }

      return lastPage.posts[lastPage.posts.length - 1].id
    },

    initialPageParam: '',
  })
}
