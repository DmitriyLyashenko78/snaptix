import type { CreatePostRequestDto, CreatePostResponseDto, UploadPostImageResponseDto } from './dto'

// TODO: replace stubs with real API calls when backend is ready
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const uploadPostImage = async (_file: File): Promise<UploadPostImageResponseDto> => {
  await new Promise((r) => setTimeout(r, 800))
  return { uploadId: `stub-upload-${Date.now()}`, url: '' }
}

export const createPost = async (data: CreatePostRequestDto): Promise<CreatePostResponseDto> => {
  await new Promise((r) => setTimeout(r, 1000))
  return {
    id: Date.now(),
    description: data.description,
    images: [],
    createdAt: new Date().toISOString(),
  }
}
