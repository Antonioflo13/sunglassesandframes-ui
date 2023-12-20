import { MobileSearchFilterLabels } from '@components/MobileSearchFilterLabels/MobileSearchFilterLabels';
import type { Meta, StoryObj } from '@storybook/react';

const metaTypography = {
  title: 'sunglassesandframes/Components/MobileSearchFilterLabels',
  component: MobileSearchFilterLabels,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    filterLabels: [
      {
        label: 'DESIGNERS',
        selected: true
      },
      {
        label: 'PRODUCTS',
        selected: false
      }
    ]
  },
} satisfies Meta<typeof MobileSearchFilterLabels>;

export default metaTypography;
type Story = StoryObj<typeof metaTypography>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    filterLabels: [
      {
        label: 'DESIGNERS',
        selected: true
      },
      {
        label: 'PRODUCTS',
        selected: false
      }
    ]
  },
};

export const Selected: Story = {
  args: {
    filterLabels: [
      {
        label: 'DESIGNERS',
        selected: true
      },
      {
        label: 'PRODUCTS',
        selected: false
      }
    ]
  },
};
