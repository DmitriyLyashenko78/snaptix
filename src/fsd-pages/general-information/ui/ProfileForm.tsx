'use client'

import { useForm, SubmitHandler, Controller } from 'react-hook-form' // 👈 Добавить Controller
import { Button } from '@/shared/ui/button/Button'
import { Input } from '@/shared/ui/input/Input'
import { DatePicker } from '@/shared/ui/date-picker/DatePicker'
import s from './ProfileForm.module.css'
import { useMeQuery } from '@/shared/api/auth'

interface IProfileForm {
  username: string
  firstName: string
  lastName: string
  dateOfBirth: Date | undefined
  country: string
  city: string
  aboutMe: string
}

const defaultValues = {
  username: '',
  firstName: '',
  lastName: '',
  dateOfBirth: undefined,
  country: '',
  city: '',
  aboutMe: '',
}

export default function ProfileForm() {
  const { data: me } = useMeQuery()

  const {
    register,
    handleSubmit,
    control, //  control для работы с DatePicker
    formState: { errors, isSubmitting },
  } = useForm<IProfileForm>({
    defaultValues: defaultValues,
    values: me
      ? {
          ...defaultValues,
          username: me.username || '',
        }
      : undefined,
    resetOptions: {
      keepDirtyValues: true, // 👈Предотвращает затирание измененных пользователем полей при обновлении 'values'
    },
  })

  const validateAge = (date: Date | undefined) => {
    if (!date) return true
    const today = new Date()
    const birthDate = new Date(date)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }

    if (age < 13) {
      return 'A user under 13 cannot create a profile. Privacy Policy'
    }
    return true
  }

  const onSubmit: SubmitHandler<IProfileForm> = async (data) => {
    console.log(data)
    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)
        }, 1000)
      })
      alert('Your settings are saved!')
    } catch (error) {
      alert('Error! Server is not available!')
      return console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <div className={s.formGroup}>
        <Input
          id="username"
          label={
            <>
              Username<span style={{ color: 'red', marginLeft: '4px' }}>*</span>
            </>
          }
          {...register('username', {
            required: 'Username is required',
            minLength: { value: 6, message: 'Minimum 6 characters' },
            maxLength: { value: 30, message: 'Maximum 30 characters' },
            pattern: {
              value: /^[a-zA-Z0-9_-]+$/,
              message: 'Only Latin letters, numbers, " _ " and " - " are allowed',
            },
          })}
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
            maxLength: { value: 50, message: 'Maximum 50 characters' },
            pattern: {
              value: /^[a-zA-Za-яА-ЯёЁ]+$/,
              message: 'Only Latin and Russian letters are allowed',
            },
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
            maxLength: { value: 50, message: 'Maximum 50 characters' },
            pattern: {
              value: /^[a-zA-Za-яА-ЯёЁ]+$/,
              message: 'Only Latin and Russian letters are allowed',
            },
          })}
          error={errors.lastName?.message}
        />
      </div>

      <div className={s.formGroup}>
        <p className={s.date}>Date of birth</p>
        <Controller
          name="dateOfBirth"
          control={control}
          rules={{ validate: validateAge }}
          render={({ field, fieldState: { error } }) => {
            return (
              <div>
                <DatePicker
                  mode="single"
                  value={field.value}
                  onChange={field.onChange}
                  error={!!error}
                  errorText={undefined}
                  locale="en"
                  disabled={false}
                />
                {error?.message && (
                  <div
                    className={s.errorMessage}
                    dangerouslySetInnerHTML={{
                      __html: error.message.replace(
                        'Privacy Policy',
                        '<a href="/privacy-policy" style="text-decoration: underline; color: #4C8DFF; font-weight: 500;">Privacy Policy</a>',
                      ),
                    }}
                  />
                )}
              </div>
            )
          }}
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
              value: 200,
              message: 'Maximum 200 characters',
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
