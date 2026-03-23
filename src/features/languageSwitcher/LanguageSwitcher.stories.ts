import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from '@storybook/test'
import { LanguageSwitcher } from '@/src/features/languageSwitcher/LanguageSwitcher'

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'Components/LanguageSwitcher',
  component: LanguageSwitcher,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    language: 'ru',
    onLanguageChange: fn(),
  },
}

export default meta
type Story = StoryObj<typeof LanguageSwitcher>

export const EnSwitcher: Story = {
  args: {
    language: 'en',
  },
}
export const RuSwitcher: Story = {
  args: {
    language: 'ru',
  },
}
