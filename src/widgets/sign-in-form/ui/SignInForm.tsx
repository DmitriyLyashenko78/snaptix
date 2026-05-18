'use client'
import { Input } from '@/shared/ui/input/Input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/shared/ui/button/Button'
import { EyeIcon } from '@/shared/ui/svg/Icon'
import { type SignInFormValues, signInSchema } from '@/widgets/sign-in-form/model/signInSchema'

import s from './SignInForm.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSignInMutation } from '@/fsd-pages/sign-in/api/hooks/use-sign-in-mutations'
import { mapLoginServerErrors } from '@/fsd-pages/sign-in/model/lib/map-login-server-errors'
import { setAuthAction } from '@/app/actions/actions'

export const SignInForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isValid },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const { mutate, isPending } = useSignInMutation({
    onSuccess: async (data) => {
      await setAuthAction(data.accessToken)
      reset()
      router.push('/profile')
    },
    onError: (error) => mapLoginServerErrors(error, setError),
  })

  const onSubmit = (data: SignInFormValues) => mutate(data)

  return (
    <form className={s.container} onSubmit={handleSubmit(onSubmit)}>
      <section className={s.header}>
        <h2>Sign In</h2>
      </section>
      <Input
        label="Email"
        type="email"
        placeholder="Email"
        autoComplete="email"
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        label="Password"
        rightIcon={EyeIcon}
        type="password"
        rightIconClickable={true}
        placeholder="Password"
        autoComplete="new-password"
        {...register('password')}
        error={errors.password?.message}
      />
      <section className={s.buttons}>
        <Link className={s.forgot} href="">
          Forgot Password
        </Link>
        <Button variant={'primary'} type="submit" disabled={!isValid || isPending}>
          Sign In
        </Button>
        <p>Don’t have an account?</p>
        <Link href="/signup">
          <Button variant={'ghost'}>Sign Up</Button>
        </Link>
      </section>
    </form>
  )
}
