'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from '@/shared/ui/button/Button'
import { Input } from '@/shared/ui/input/Input'
import { useConfirmEmailMutation } from '@/fsd-pages/confirm-email/api/hooks/use-confirm-email-mutation'
import { useResendVerificationMutation } from '@/fsd-pages/confirm-email/api/hooks/use-resend-verification-mutation'
import s from './ConfirmEmail.module.css'

type Status = 'loading' | 'success' | 'expired' | 'error'

export const ConfirmEmail = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<Status>('loading')
  const [email, setEmail] = useState('')

  const code = searchParams.get('code')

  const { mutate: confirm } = useConfirmEmailMutation({
    onSuccess: () => {
      setStatus('success')
    },
    onError: (error) => {
      if (error.message === 'LINK_EXPIRED' || error.message === 'LINK_INVALID') {
        setStatus('expired')
      } else {
        setStatus('error')
      }
    },
  })

  const { mutate: resend, isPending: isResending } = useResendVerificationMutation({
    onSuccess: () => {
      setStatus('loading')
    },
    onError: () => {
      setStatus('error')
    },
  })

  useEffect(() => {
    if (!code) {
      setStatus('error')
      return
    }

    confirm({ confirmationCode: code })
  }, [code])

  const handleResend = () => {
    if (!email) return
    resend({ email })
  }

  if (status === 'loading') {
    return (
      <div className={s.container}>
        <p>Verifying your email...</p>
      </div>
    )
  }

  if (status === 'success') {
    return (
      <div className={s.container}>
        <div className={s.card}>
          <h2 className={s.title}>Congratulations!</h2>
          <p className={s.description}>Your email has been confirmed</p>
          <Button variant={'primary'} onClick={() => router.push('/sign-in')}>
            Sign In
          </Button>
        </div>
      </div>
    )
  }

  if (status === 'expired') {
    return (
      <div className={s.container}>
        <div className={s.card}>
          <h2 className={s.title}>Email verification link expired</h2>
          <p className={s.description}>
            Looks like the verification link has expired. Not to worry, we can send the link again
          </p>
          <Input
            label="Email"
            type="email"
            placeholder="Epam@epam.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button variant={'primary'} onClick={handleResend} disabled={isResending || !email}>
            {isResending ? 'Sending...' : 'Resend verification link'}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={s.container}>
      <div className={s.card}>
        <h2 className={s.title}>Something went wrong</h2>
        <p className={s.description}>The verification link is invalid.</p>
        <Button variant={'primary'} onClick={() => router.push('/sign-up')}>
          Go to Sign Up
        </Button>
      </div>
    </div>
  )
}
