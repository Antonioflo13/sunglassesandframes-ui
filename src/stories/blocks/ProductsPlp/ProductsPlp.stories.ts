import { ProductsPlp } from '@blocks/ProductsPlp';
import type { Meta, StoryObj } from '@storybook/react';

const metaproductsPlp = {
  title: 'sunglassesandframes/Blocks/ProductsPlp',
  component: ProductsPlp,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductsPlp>;

export default metaproductsPlp;
type Story = StoryObj<typeof metaproductsPlp>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: 'section title',
    products: [
      {
        id: '0',
        image: {
          src: 'https://via.placeholder.com/370x370',
          alt: 'image',
        },
        productName: 'Product id',
        designer: 'Designer',
        price: '123',
      },
      {
        id: '1',
        image: {
          src: 'https://via.placeholder.com/370x370',
          alt: 'image',
        },
        productName: 'product id',
        designer: 'Designer',
        price: '123',
      }
    ] }
};

export const WithoutTitle: Story = {
  args: {
    products: [
      {
        id: '0',
        image: {
          src: 'https://via.placeholder.com/370x370',
          alt: 'image',
        },
        productName: 'Product id',
        designer: 'Designer',
        price: '123',
      },
      {
        id: '1',
        image: {
          src: 'https://via.placeholder.com/370x370',
          alt: 'image',
        },
        productName: 'product id',
        designer: 'Designer',
        price: '123',
      }
    ] }
};
