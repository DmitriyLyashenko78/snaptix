import { baseFetch } from '@/shared/api/baseFetch/baseFetch'
import type { LatestPostsResponseDto, PostsRequestDto } from '../api/dto'

export const getPosts = ({ pageSize = 4 }: PostsRequestDto) => {
  const url = `api/v1/home/latest-posts?pageSize=${pageSize}`

  return baseFetch<LatestPostsResponseDto>(url, { method: 'GET' })
}
