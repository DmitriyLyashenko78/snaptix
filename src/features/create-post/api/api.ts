import { baseFetch } from '@/shared/api/baseFetch/baseFetch'
import type { CreatePostRequestDto, CreatePostResponseDto, UploadPostImageResponseDto } from './dto'

// TODO: replace with real upload endpoint when backend is ready
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const uploadPostImage = async (_file: File): Promise<UploadPostImageResponseDto> => {
  await new Promise((r) => setTimeout(r, 800))
  return { fileId: `stub-${crypto.randomUUID()}`, url: '' }
}

export const createPost = async (data: CreatePostRequestDto): Promise<CreatePostResponseDto> => {
  return baseFetch<CreatePostResponseDto>('/api/v1/posts', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
