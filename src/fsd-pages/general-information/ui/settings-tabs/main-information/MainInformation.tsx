'use client'

import s from './MainInformation.module.css'
import { Button } from '@/shared/ui/button/Button'
import ProfileForm from '@/fsd-pages/general-information/ui/ProfileForm'
import Image from 'next/image'
import defaultPhoto from '@/public/img/defaultPhoto.jpg'

export const MainInformation = () => {
  return (
    <div className={s.informationBlock}>
      <div className={s.userPhotoWrapper}>
        <Image src={defaultPhoto} alt="User avatar" width={205} height={205} className={s.userPhoto} />
        <Button variant="outline">Select Profile Photo</Button>
      </div>
      <div className={s.userInformation}>
        <ProfileForm />
      </div>
    </div>
  )
}
