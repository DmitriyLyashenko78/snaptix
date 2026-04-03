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

export const SignInForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = async (data: SignInFormValues) => {
    try {
      // Имитация запроса - соответвующий экшен - signIn
      console.log(data)
      router.push('/profile')
    } catch (error) {
      console.error('Login failed', error)
    }
  }

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
        <Button variant={'primary'} type="submit" disabled={!isValid}>
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
