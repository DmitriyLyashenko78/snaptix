import { PostProps } from '@/entities/post/Post.types'

export type PostsRequestDto = {
  endCursorPostId?: number
  pageSize?: number
  sortBy?: string
  sortDirection?: 'desc' | 'asc'
}

export type PostsResponseDto = {
  totalCount: number
  pageSize: number
  items: PostProps[]
  totalUsers: number
}
