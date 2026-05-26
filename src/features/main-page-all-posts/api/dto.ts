import type { Post } from '@/entities/post/ui/Post.types'

export type PostsRequestDto = {
  pageSize?: number
}

type Owner = {
  firstName: string
  lastName: string
  avatar: string
}

export type LatestPostsResponseDto = {
  posts: Post[]
  owner: Owner
}
