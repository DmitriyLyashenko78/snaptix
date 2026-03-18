'use client'

import s from './GeneralInformation.module.css'
import { redirect } from 'next/navigation'
import SettingsTabs from './settings-tabs/SettingsTabs'
import { VALID_PARTS } from '../constants/validParts'

interface GeneralInformationProps {
  part?: string
}

export const GeneralInformation = ({ part }: GeneralInformationProps) => {
  // Если part отсутствует или невалидный, редиректим на info
  if (!part || !VALID_PARTS.includes(part)) {
    redirect('/settings?part=info')
  }

  return (
    <div className="settings-container">
      <h1>Profile settings</h1>

      <SettingsTabs currentPart={part} />
    </div>
  )
}
