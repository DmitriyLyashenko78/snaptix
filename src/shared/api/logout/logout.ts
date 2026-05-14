import { baseFetch } from '@/shared/api/baseFetch/baseFetch'

export const logout = () => {
  return baseFetch('https://inctagram.work/api/v1/auth/logout', {
    method: 'POST',
    credentials: 'include',
  })
}
