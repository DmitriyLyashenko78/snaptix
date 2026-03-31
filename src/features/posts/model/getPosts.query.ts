import { baseFetch } from '@/shared/api/baseFetch/baseFetch'
import type { PostProps } from '@/entities/post/Post.types'
import { useQuery } from '@tanstack/react-query'

export type PostsResponse = {
  totalCount: number
  pageSize: number
  items: PostProps[]
  totalUsers: number
}

export const usePostsQuery = (endCursorPostId: number = 0) => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      baseFetch<PostsResponse>(
        `https://inctagram.work/api/v1/posts/all/${endCursorPostId}?pageSize=4&sortDirection=desc`,
      ),
  })
}
