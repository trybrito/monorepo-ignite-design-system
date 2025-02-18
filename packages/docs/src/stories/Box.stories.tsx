import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@try-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando elemento Box</Text>,
  },
  argTypes: {
    description: 'Sets default Box children elements',
    children: {
      options: ['Text', 'Other'],
      mapping: {
        Text: <Text>Testando elemento Box</Text>,
        Other: <Text>Testando...</Text>,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
