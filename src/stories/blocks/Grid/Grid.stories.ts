import { Grid } from '@blocks/Grid';
import { Img } from '@stories/components/ImageWrapper/Img';
import type { Meta, StoryObj } from '@storybook/react';

const metaGrid = {
  title: 'sunglassesandframes/Blocks/ProductsList',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default metaGrid;
type Story = StoryObj<typeof metaGrid>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    items: [
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
    type: 'products',
  },
};

export const WithArticle: Story = {
  args: {
    items: [
      {
        id: '0',
        image: Img('230x110'),
        title: 'Article title',
        subtitle: 'subtitle',
        type: 'article',
      },
      {
        id: '1',
        image: Img('230x110'),
        title: 'Article title',
        subtitle: 'subtitle',
        type: 'article',
      },
      {
        id: '2',
        image: Img('230x110'),
        title: 'Article title',
        subtitle: 'subtitle',
        type: 'article',
      },
    ],
    type: 'articles',
  },
};
