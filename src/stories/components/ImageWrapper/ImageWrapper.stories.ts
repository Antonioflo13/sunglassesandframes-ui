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

export const SwiperPrimary: Story = {
  args: {
    children: '<img src="https://via.placeholder.com/370" alt="alt" />',
    typeImage: TypeImage.swiperPrimary
  },
};

export const SwiperSecondary: Story = {
  args: {
    children: '<img src="https://via.placeholder.com/370" alt="alt" />',
    typeImage: TypeImage.swiperSecondary
  },
};

export const ImagePrimary: Story = {
  args: {
    children: '<img src="https://via.placeholder.com/370" alt="alt" />',
    typeImage: TypeImage.imagePrimary
  },
};

export const Plp: Story = {
  args: {
    children: '<img src="https://via.placeholder.com/370" alt="alt" />',
    typeImage: TypeImage.plp
  },
};

export const Pdp: Story = {
  args: {
    children: '<img src="https://via.placeholder.com/370" alt="alt" />',
    typeImage: TypeImage.pdp
  },
};
