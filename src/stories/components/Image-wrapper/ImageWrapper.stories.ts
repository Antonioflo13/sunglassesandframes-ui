import { ImageWrapper } from '@components/image-wrapper';
import type { Meta, StoryObj } from '@storybook/react';

import { Img } from './Img';

const meta: Meta<typeof ImageWrapper> = {
  title: 'sunglassesandframes/Components/ImageWrapper',
  component: ImageWrapper,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    typeImage: {
      control: 'select',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageWrapper>;

export const SwiperPrimary: Story = {
  args: {
    children: Img('370x370'),
    typeImage: 'swiper-primary',
  },
};

export const SwiperSecondary: Story = {
  args: {
    children: Img('350x350'),
    typeImage: 'swiper-secondary',
  },
};

export const ImagePrimary: Story = {
  args: {
    children: Img('370x200'),
    typeImage: 'image-primary',
  },
};

export const ImageSecondary: Story = {
  args: {
    children: Img('230x110'),
    typeImage: 'image-secondary',
  },
};

export const Plp: Story = {
  args: {
    children: Img('160x130'),
    typeImage: 'plp',
  },
};

export const Pdp: Story = {
  args: {
    children: Img('390x440'),
    typeImage: 'pdp',
  },
};
