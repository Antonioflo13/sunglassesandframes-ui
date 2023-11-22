import { IconWrapper } from '@components/IconWrapper';
import type { Meta, StoryObj } from '@storybook/react';

const metaTypography = {
  title: 'sunglassesandframes/Components/IconWrapper',
  component: IconWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'number',
      },
    },
    name: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof IconWrapper>;

export default metaTypography;
type Story = StoryObj<typeof metaTypography>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    src: '',
    size: 18,
    name: 'icon',
  },
};
