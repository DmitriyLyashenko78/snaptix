'use client'

import { useRouter } from 'next/navigation'

interface SettingsTabsProps {
  currentPart: string
}

export default function SettingsTabs({ currentPart }: SettingsTabsProps) {
  const router = useRouter()

  const tabs = [
    { id: 'info', label: 'General information', icon: '👤' },
    { id: 'devices', label: 'Devices', icon: '📱' },
    { id: 'subscriptions', label: 'Account Management', icon: '⭐' },
    { id: 'payments', label: 'My payments', icon: '💳' },
  ]

  const handleTabChange = (tabId: string) => {
    router.push(`/settings?part=${tabId}`)
  }

  return (
    <div className="settings-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabChange(tab.id)}
          style={{ marginRight: '15px' }}
          className={`tab-button ${currentPart === tab.id ? 'active' : ''}`}
        >
          <span className="tab-icon">{tab.icon}</span>
          <span className="tab-label">{tab.label}</span>
        </button>
      ))}
    </div>
  )
}
