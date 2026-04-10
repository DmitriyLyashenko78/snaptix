'use server'
import { cookies } from 'next/headers'

export async function toggleAuthAction() {
  const cookieStore = await cookies()
  const isAuth = cookieStore.get('isAuth')?.value === 'true'

  cookieStore.set('isAuth', String(!isAuth), {
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    httpOnly: false,
    maxAge: 86400,
  })
}
