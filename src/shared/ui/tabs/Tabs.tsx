import { TabsProps } from '@/src/shared/ui/tabs/Tabs.types'
import { TabsItem } from '@/src/shared/ui/tabs/TabItem'
import s from './Tabs.module.css'

export const Tabs = ({ tabs, activeTab, onChange }: TabsProps) => {
  return (
    <div className={s.tabs}>
      {tabs.map((tab) => (
        <TabsItem key={tab.id} tab={tab} isActive={activeTab === tab.id} onClick={onChange} />
      ))}
    </div>
  )
}
