import { baseFetch } from '@/shared/api/baseFetch/baseFetch'
import type { GetMeResponseDto } from './dto'

export const getMe = () => baseFetch<GetMeResponseDto>('/api/v1/auth/me', { method: 'GET' })
