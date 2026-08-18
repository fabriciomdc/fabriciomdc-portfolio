import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/presentation/components/ui/button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'technical']
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default'
  }
}

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline'
  }
}

export const Technical: Story = {
  args: {
    children: 'Technical Button',
    variant: 'technical'
  }
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true
  }
}
