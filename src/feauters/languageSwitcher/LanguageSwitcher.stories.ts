import type { Meta, StoryObj } from '@storybook/nextjs'
import { LanguageSwitcher } from '@/src/feauters/languageSwitcher/LanguageSwitcher'

const meta = {
  title: 'Components/LanguageSwitcher',
  component: LanguageSwitcher,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof LanguageSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const RuSwitcher: Story = {
  args: {},
}
