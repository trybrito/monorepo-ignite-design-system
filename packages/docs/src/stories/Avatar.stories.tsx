import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@try-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/trybrito.png',
    alt: 'Thiago Brito',
  },
  argTypes: {
    src: {
      description: 'Sets the image source',
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
