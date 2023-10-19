import { ImageWrapper, TypeImage } from '@components/ImageWrapper';
import type { Meta, StoryObj } from '@storybook/react';

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

export const Image1: Story = {
  args: {
    children: '<img src="https://via.placeholder.com/370" alt="alt" />',
    typeImage: TypeImage.image1
  },
};

export const Image2: Story = {
  args: {
    children: '<img src="https://via.placeholder.com/370" alt="alt" />',
    typeImage: TypeImage.image2
  },
};
