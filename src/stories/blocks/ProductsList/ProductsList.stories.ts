import { ProductsList } from '@blocks/ProductsList';
import type { Meta, StoryObj } from '@storybook/react';

const metaproductsPlp = {
  title: 'sunglassesandframes/Blocks/ProductsList',
  component: ProductsList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductsList>;

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
          src: 'https://via.placeholder.com/160x130',
          alt: 'image',
        },
        productName: 'Product id',
        designer: 'Designer',
        price: '123',
      },
      {
        id: '1',
        image: {
          src: 'https://via.placeholder.com/160x130',
          alt: 'image',
        },
        productName: 'product id',
        designer: 'Designer',
        price: '123',
      },
      {
        id: '2',
        image: {
          src: 'https://via.placeholder.com/160x130',
          alt: 'image',
        },
        productName: 'product id',
        designer: 'Designer',
        price: '123',
      },
    ],
  },
};

export const WithoutTitle: Story = {
  args: {
    products: [
      {
        id: '0',
        image: {
          src: 'https://via.placeholder.com/160x130',
          alt: 'image',
        },
        productName: 'Product id',
        designer: 'Designer',
        price: '123',
      },
      {
        id: '1',
        image: {
          src: 'https://via.placeholder.com/160x130',
          alt: 'image',
        },
        productName: 'product id',
        designer: 'Designer',
        price: '123',
      },
      {
        id: '2',
        image: {
          src: 'https://via.placeholder.com/160x130',
          alt: 'image',
        },
        productName: 'product id',
        designer: 'Designer',
        price: '123',
      },
    ],
  },
};
