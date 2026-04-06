'use client'

import s from './MainInformation.module.css'
import { Button } from '@/shared/ui/button/Button'
import ProfileForm from '@/fsd-pages/general-information/ui/ProfileForm'
import Image from 'next/image'
import defaultPhoto from '@/public/img/defaultPhoto.jpg'

export const MainInformation = () => {
  const handleDeleteAvatar = () => {
    // deleteAvatarAPI()
  }

  return (
    <div className={s.informationBlock}>
      <div className={s.userPhotoWrapper}>
        <div className={s.avatarContainer}>
          <Image src={defaultPhoto} alt="User avatar" width={205} height={205} className={s.userPhoto} />
          <button onClick={handleDeleteAvatar} className={s.deleteButton} aria-label="Delete photo">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <Button variant="outline">Select Profile Photo</Button>
      </div>
      <div className={s.userInformation}>
        <ProfileForm />
      </div>
    </div>
  )
}
