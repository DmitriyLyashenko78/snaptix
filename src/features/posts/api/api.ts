import { baseFetch } from '@/shared/api/baseFetch/baseFetch'
import type { PostsRequestDto, PostsResponseDto } from '@/features/posts/api/dto'

export const getPosts = ({ pageSize = 4, sortDirection = 'desc' }: PostsRequestDto) => {
  const url = `https://inctagram.work/api/v1/posts/all/{endCursorPostId}?pageSize=${pageSize}&sortDirection=${sortDirection}`

  return baseFetch<PostsResponseDto>(url, { method: 'GET' })
}
