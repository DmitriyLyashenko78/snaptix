'use client'

import { useForm, SubmitHandler, Controller } from 'react-hook-form' // 👈 Добавить Controller
import { Button } from '@/shared/ui/button/Button'
import { Input } from '@/shared/ui/input/Input'
import { DatePicker } from '@/shared/ui/date-picker/DatePicker'
import s from './ProfileForm.module.css'

// Типы для формы
interface IProfileForm {
  userTest: string
  firstName: string
  lastName: string
  dateOfBirth: Date | undefined
  country: string
  city: string
  aboutMe: string
}

export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    control, //  control для работы с DatePicker
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IProfileForm>({
    defaultValues: {
      userTest: '',
      firstName: '',
      lastName: '',
      dateOfBirth: undefined,
      country: '',
      city: '',
      aboutMe: '',
    },
  })

  const onSubmit: SubmitHandler<IProfileForm> = async (data) => {
    console.log(data)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      alert('Profile updated successfully!')
      reset()
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <div className={s.formGroup}>
        <Input
          id="userTest"
          label={
            <>
              Username<span style={{ color: 'red', marginLeft: '4px' }}>*</span>
            </>
          }
          {...register('userTest')}
        />
      </div>

      <div className={s.formGroup}>
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

      <div className={s.formGroup}>
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

      <div className={s.formGroup}>
        <p className={s.date}>Date of birth</p>
        <Controller
          name="dateOfBirth"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <DatePicker
              mode="single"
              value={field.value}
              onChange={field.onChange}
              error={!!error}
              errorText={error?.message}
              locale="en"
              disabled={false}
            />
          )}
        />
      </div>

      <div className={s.row}>
        <div className={s.rowItem}>
          <label className={s.label}>Select your country</label>
          <select
            id="country"
            {...register('country', { required: 'Please select a country' })}
            className={`${s.select} ${errors.country ? s.selectError : ''}`}
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
          {errors.country && <span className={s.errorMessage}>{errors.country.message}</span>}
        </div>

        <div className={s.rowItem}>
          <label className={s.label}>Select your city</label>
          <select
            id="city"
            {...register('city', { required: 'Please select a city' })}
            className={`${s.select} ${errors.city ? s.selectError : ''}`}
          >
            <option value="">City</option>
            <option value="new-york">New York</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
            <option value="houston">Houston</option>
            <option value="phoenix">Phoenix</option>
          </select>
          {errors.city && <span className={s.errorMessage}>{errors.city.message}</span>}
        </div>
      </div>

      <div className={s.formGroup}>
        <label htmlFor="aboutMe" className={s.label}>
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
          className={`${s.textarea} ${errors.aboutMe ? s.textareaError : ''}`}
        />
        {errors.aboutMe && <span className={s.errorMessage}>{errors.aboutMe.message}</span>}
      </div>

      <div className={s.buttonWrapper}>
        <Button type="submit" variant="primary" disabled={isSubmitting} width="auto">
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
    </form>
  )
}
