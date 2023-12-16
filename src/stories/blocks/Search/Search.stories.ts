import { Search } from '@blocks/Search';
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
  args: { designers: [
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
      productName: 'Product id',
      designer: 'Designer',
      price: '123',
    },
  ] },
};
