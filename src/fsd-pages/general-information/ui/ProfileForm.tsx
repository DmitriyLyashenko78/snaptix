// app/components/ProfileForm.tsx
'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '@/shared/ui/button/Button'
import { Input } from '@/shared/ui/input/Input'
import styles from './ProfileForm.module.css'

// Типы для формы
interface IProfileForm {
  userTest: string
  firstName: string
  lastName: string
  dateOfBirth: string
  country: string
  city: string
  aboutMe: string
}

export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IProfileForm>({
    defaultValues: {
      userTest: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      country: '',
      city: '',
      aboutMe: '',
    },
  })

  const onSubmit: SubmitHandler<IProfileForm> = async (data) => {
    try {
      console.log('Form data:', data)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      alert('Profile updated successfully!')
      reset()
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <Input id="userTest" {...register('userTest')} />
      </div>

      <div className={styles.formGroup}>
        <Input
          id="firstName"
          label={
            <>
              First name<span style={{ color: 'red', marginLeft: '4px' }}>*</span>
            </>
          }
          {...register('firstName', {
            required: 'First name is required',
          })}
          error={errors.firstName?.message}
        />
      </div>

      <div className={styles.formGroup}>
        <Input
          id="lastName"
          label={
            <>
              Last Name<span style={{ color: 'red', marginLeft: '4px' }}>*</span>
            </>
          }
          {...register('lastName', {
            required: 'Last name is required',
          })}
          error={errors.lastName?.message}
        />
      </div>

      <div className={styles.formGroup}>
        <Input
          id="dateOfBirth"
          label="Date of birth"
          {...register('dateOfBirth', {
            pattern: {
              value: /^\d{2}\.\d{2}\.\d{4}$/,
              message: 'Please use format: DD.MM.YYYY',
            },
          })}
          placeholder="00.00.0000"
          error={errors.dateOfBirth?.message}
        />
      </div>

      <div className={styles.row}>
        <div className={styles.rowItem}>
          <label className={styles.label}>Select your country</label>
          <select
            id="country"
            {...register('country', { required: 'Please select a country' })}
            className={`${styles.select} ${errors.country ? styles.selectError : ''}`}
          >
            <option value="">Country</option>
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="germany">Germany</option>
            <option value="france">France</option>
            <option value="japan">Japan</option>
            <option value="australia">Australia</option>
          </select>
          {errors.country && <span className={styles.errorMessage}>{errors.country.message}</span>}
        </div>

        <div className={styles.rowItem}>
          <label className={styles.label}>Select your city</label>
          <select
            id="city"
            {...register('city', { required: 'Please select a city' })}
            className={`${styles.select} ${errors.city ? styles.selectError : ''}`}
          >
            <option value="">City</option>
            <option value="new-york">New York</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
            <option value="houston">Houston</option>
            <option value="phoenix">Phoenix</option>
          </select>
          {errors.city && <span className={styles.errorMessage}>{errors.city.message}</span>}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="aboutMe" className={styles.label}>
          About Me
        </label>
        <textarea
          id="aboutMe"
          {...register('aboutMe', {
            maxLength: {
              value: 500,
              message: 'Maximum 500 characters',
            },
          })}
          rows={4}
          placeholder="Text-area"
          className={`${styles.textarea} ${errors.aboutMe ? styles.textareaError : ''}`}
        />
        {errors.aboutMe && <span className={styles.errorMessage}>{errors.aboutMe.message}</span>}
      </div>

      <div className={styles.buttonWrapper}>
        <Button type="submit" variant="primary" disabled={isSubmitting} width="auto">
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
    </form>
  )
}
