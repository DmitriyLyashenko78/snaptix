'use client'
import { Input } from '@/shared/ui/Input/Input'
import { EyeIcon } from '@/shared/ui/SVG/Icon'
import { Button } from '@/shared/ui/Button/Button'
import s from './SignUpForm.module.css'
import { Checkbox } from '@/shared/ui/checkbox/Checkbox'
import { useForm } from 'react-hook-form'
import { SignUpFormValues, signUpSchema } from '@/widgets/signUpForm/model/signUpSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const agreeValue = watch('agree')

  const onSubmit = (data: SignUpFormValues) => {
    console.log(data)
  }

  return (
    <form className={s.container} onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign Up</h2>
      <Input
        label="Username"
        type="text"
        placeholder="Username"
        {...register('username')}
        error={errors.username?.message}
      />
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
      <Input
        label="Password confirmation"
        type="password"
        rightIcon={EyeIcon}
        placeholder="Password confirmation"
        rightIconClickable={true}
        autoComplete="new-password"
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
      />
      <Checkbox
        {...register('agree')}
        checked={agreeValue}
        label={
          <>
            I agree to the{' '}
            <a href="#" onClick={(e) => e.stopPropagation()}>
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" onClick={(e) => e.stopPropagation()}>
              Privacy Policy
            </a>
          </>
        }
        error={errors.agree?.message}
      />
      <Button variant={'primary'} type="submit" disabled={!isValid}>
        Sign Up
      </Button>
      <p>Do you have an account?</p>
      <Button variant={'ghost'}>Sign In</Button>
    </form>
  )
}
