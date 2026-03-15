'use client'
import { Input } from '@/src/shared/ui/Input/Input'
import { EyeIcon } from '@/src/shared/ui/SVG/Icon'
import { Button } from '@/src/shared/ui/Button/Button'
import s from './Form.module.css'
import { Checkbox } from '@/src/shared/ui/checkbox/Checkbox'
import { useState } from 'react'

export const Form = () => {
  const [checked, setChecked] = useState(true)
  return (
    <form className={s.container} action="/api/register" method="post">
      <h2>Sign Up</h2>
      <Input label="Username" type="text" placeholder="Username" name="username" />
      <Input label="Email" type="email" placeholder="Email" name="email" autoComplete="email" />
      <Input
        label="Password"
        rightIcon={EyeIcon}
        type="password"
        rightIconClickable={true}
        placeholder="Password"
        name="password"
        autoComplete="new-password"
      />
      <Input
        label="Password confirmation"
        type="password"
        rightIcon={EyeIcon}
        placeholder="Password confirmation"
        rightIconClickable={true}
        name="confirmPassword"
        autoComplete="new-password"
      />
      <Checkbox
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
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <Button variant={'primary'} type="submit">
        Sign Up
      </Button>
      <p>Do you have an account?</p>
      <Button variant={'ghost'}>Sign In</Button>
    </form>
  )
}
