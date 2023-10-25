import { SectionSlider } from '@blocks/s';
import type { Meta, StoryObj } from '@storybook/react';

const metaSectionSlider = {
  title: 'sunglassesandframes/Blocks/SectionSlider',
  component: SectionSlider,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SectionSlider>;

export default metaSectionSlider;
type Story = StoryObj<typeof metaSectionSlider>;

export const Default: Story = {
  args: {
    title: 'section title',
    items: [
      {
        id: 0,
        src: 'https://via.placeholder.com/230x110',
        alt: 'alt',
        title: 'post title',
      },
      {
        id: 1,
        src: 'https://via.placeholder.com/230x110',
        alt: 'alt',
        title: 'post title',
      },
      {
        id: 2,
        src: 'https://via.placeholder.com/230x110',
        alt: 'alt',
        title: 'post title',
      },
    ],
  },
};
