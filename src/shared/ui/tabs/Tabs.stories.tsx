import React from 'react'
import { Tabs } from './Tabs'
import { TabsProps } from '@/shared/ui/tabs/Tabs.types'

const meta = {
  title: 'UI/Tabs',
  component: Tabs,
  argTypes: {
    activeTab: { control: 'text' },
    onChange: { action: 'tab changed' },
  },
}

export default meta

const defaultTabs = [
  { id: '1', label: 'Tabs' },
  { id: '2', label: 'Tabs' },
  { id: '3', label: 'Tabs' },
]

export const Default = (args: TabsProps) => <Tabs {...args} />
Default.args = {
  tabs: defaultTabs,
  activeTab: '1',
}

export const Active = (args: TabsProps) => <Tabs {...args} />
Active.args = {
  tabs: defaultTabs,
  activeTab: '2',
}

export const Hover = (args: TabsProps) => <Tabs {...args} />
Hover.args = {
  tabs: defaultTabs,
  activeTab: '1',
}

export const Focus = (args: TabsProps) => <Tabs {...args} />
Focus.args = {
  tabs: defaultTabs,
  activeTab: '1',
}

export const Disabled = (args: TabsProps) => <Tabs {...args} />
Disabled.args = {
  tabs: [
    { id: '1', label: 'Tabs' },
    { id: '2', label: 'Tabs', disabled: true },
    { id: '3', label: 'Tabs' },
  ],
  activeTab: '1',
}
