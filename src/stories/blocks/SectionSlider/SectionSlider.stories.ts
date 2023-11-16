import { SectionSlider } from '@blocks/SectionSlider';
import { Img } from '@stories/components/ImageWrapper/Img';
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
        image: Img('230x110'),
        title: 'post title',
      },
      {
        id: 1,
        image: Img('230x110'),
        title: 'post title',
      },
      {
        id: 2,
        image: Img('230x110'),
        title: 'post title',
      },
    ],
  },
};
