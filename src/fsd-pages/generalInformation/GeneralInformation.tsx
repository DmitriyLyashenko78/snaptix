'use client'
import { useState } from 'react'
import s from './GeneralInformation.module.css'
import { Tabs } from '@/shared/ui/tabs/Tabs'
import { Button } from '@/shared/ui/Button/Button'
import ProfileForm from '@/fsd-pages/generalInformation/ProfileForm'

export const generalInfoTabs = [
  {
    id: 'general',
    label: 'General information',
  },
  {
    id: 'devices',
    label: 'Devices',
  },
  {
    id: 'account',
    label: 'Account Management',
  },
  {
    id: 'payments',
    label: 'My payments',
  },
]

export const GeneralInformation = () => {
  const [activeTab, setActiveTab] = useState('general')

  const renderContent = () => {
    switch (activeTab) {
      case 'devices':
        return (
          <div className={s.devicesContent}>
            <h2>Devices</h2>
          </div>
        )

      case 'account':
        return (
          <div className={s.accountContent}>
            <h2>Account Management</h2>
          </div>
        )

      case 'payments':
        return (
          <div className={s.paymentsContent}>
            <h2>My payments</h2>
          </div>
        )

      case 'general':
      default:
        return (
          <div className={s.informationBlock}>
            <div className={s.userPhotoWrapper}>
              <img
                src="#" // Путь к изображению
                alt="User avatar"
                width="192"
                height="192"
                className={s.userPhoto}
              />
              <Button variant="outline">Select Profile Photo</Button>
            </div>
            <div className={s.userInformation}>
              <ProfileForm />
            </div>
          </div>
        )
    }
  }

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.sideBar}>SideBar</div>
      <div className={s.informationBlockWrapper}>
        <div className={s.tabs}>
          <Tabs tabs={generalInfoTabs} activeTab={activeTab} onChange={handleTabChange} />
        </div>
        {renderContent()}
      </div>
    </div>
  )
}
