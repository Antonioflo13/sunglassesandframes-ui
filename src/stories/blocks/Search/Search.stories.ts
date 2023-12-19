import { Search } from '@blocks/Search';
import { Img } from '@stories/components/ImageWrapper/Img';
import type { Meta, StoryObj } from '@storybook/react';

const metaSearch = {
  title: 'sunglassesandframes/Blocks/Search',
  component: Search,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Search>;

export default metaSearch;
type Story = StoryObj<typeof metaSearch>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    designers: [
      {
        id: '0',
        name: 'Designer1',
        link: '/'
      },
      {
        id: '0',
        name: 'Designer2',
        link: '/'
      }
    ],
    products: [
      {
        id: '0',
        image: Img('230x110'),
        productName: 'Product id',
        designer: 'Designer',
        price: '123',
        type: 'product',
      },
      {
        id: '1',
        image: Img('230x110'),
        productName: 'product id',
        designer: 'Designer',
        price: '123',
        type: 'product',
      },
      {
        id: '2',
        image: Img('230x110'),
        productName: 'product id',
        designer: 'Designer',
        price: '123',
        type: 'product',
      },
    ],
  },
};
