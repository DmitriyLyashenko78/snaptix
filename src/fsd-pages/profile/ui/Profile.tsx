'use client'

import s from './Profile.module.css'
import Image from 'next/image'
import defaultPhoto from '@/public/img/defaultPhoto.jpg'
import { Button } from '@/shared/ui/button/Button'
import { redirect } from 'next/navigation'

export const Profile = () => {
  //const currentUserId = 123 // Заменить на реальное получение ID текущего пользователя
  const isAuth = false

  const onClickHandel = () => {
    redirect(`/settings`)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.userInfoWrapper}>
        <Image src={defaultPhoto} alt="User avatar" width={204} height={204} className={s.userPhoto} />
        <div className={s.userInfo}>
          <div className={s.userNameWrapper}>
            <h2>UserName</h2>
            {isAuth && (
              <Button variant={'secondary'} width={'auto'} onClick={onClickHandel}>
                Profile Settings
              </Button>
            )}
          </div>

          <div className={s.subscriptionsWrapper}>
            <div className={s.subscriptions}>
              <span className={s.quantity}>2 218</span>
              <span className={s.followers}>Following</span>
            </div>
            <div className={s.subscriptions}>
              <span className={s.quantity}>2 218</span>
              <span className={s.followers}>Followers</span>
            </div>
            <div className={s.subscriptions}>
              <span className={s.quantity}>2 218</span>
              <span className={s.followers}>Publications</span>
            </div>
          </div>
          <div className={s.aboutUser}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className={s.posts}>
        <Image src={defaultPhoto} alt="User avatar" width={234} height={228} />
        <Image src={defaultPhoto} alt="User avatar" width={234} height={228} />
        <Image src={defaultPhoto} alt="User avatar" width={234} height={228} />
        <Image src={defaultPhoto} alt="User avatar" width={234} height={228} />
        <Image src={defaultPhoto} alt="User avatar" width={234} height={228} />
        <Image src={defaultPhoto} alt="User avatar" width={234} height={228} />
        <Image src={defaultPhoto} alt="User avatar" width={234} height={228} />
        <Image src={defaultPhoto} alt="User avatar" width={234} height={228} />
      </div>
    </div>
  )
}
