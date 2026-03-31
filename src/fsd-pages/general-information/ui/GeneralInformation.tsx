'use client'
import { useState } from 'react'
import s from './GeneralInformation.module.css'
import { Tabs } from '@/shared/ui/tabs/Tabs'
import { VALID_PARTS } from '../constants/validParts'
import { Devices } from './settings-tabs/devices/Devices'
import { Payments } from './settings-tabs/payments/Payments'
import { Subscriptions } from './settings-tabs/subscriptions/Subscriptions'
import { MainInformation } from './settings-tabs/main-information/MainInformation'
import { Sidebar } from '@/shared/ui/sidebar/Sidebar'
import {
  ProfileIcon,
  CreateIcon,
  HomeIcon,
  MessengerIcon,
  StatsIcon,
  FavoriteIcon,
  SearchIcon,
} from '@/shared/ui/svg/Icon'
import { LogoutButton } from '@/shared/ui/logout-button/LogoutButton'

type GeneralInformationProps = {
  part?: string
}

export const GeneralInformation = ({ part }: GeneralInformationProps) => {
  console.log(part)
  const [activeTab, setActiveTab] = useState('general')

  const renderContent = () => {
    switch (activeTab) {
      case 'devices':
        return <Devices />

      case 'account':
        return <Subscriptions />

      case 'payments':
        return <Payments />

      case 'general':
      default:
        return <MainInformation />
    }
  }

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.informationBlockWrapper}>
        <div className={s.tabs}>
          <Tabs tabs={VALID_PARTS} activeTab={activeTab} onChange={handleTabChange} />
        </div>
        {renderContent()}
      </div>
    </div>
  )
}
