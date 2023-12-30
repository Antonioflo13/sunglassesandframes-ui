import { Search } from '@blocks/Search/Search';
import notFound from '@stories/assets/icons/search/search-not-found.png';
import search from '@stories/assets/icons/search/search.svg';
import xMark from '@stories/assets/icons/search/xmark.svg';
import { Img } from '@stories/components/ImageWrapper/Img';
import { icon } from '@stories/components/example/icon/icon';
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
        link: '/',
      },
      {
        id: '1',
        name: 'Designer2',
        link: '/',
      },
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
      {
        id: '3',
        image: Img('230x110'),
        productName: 'Product id',
        designer: 'Designer',
        price: '123',
        type: 'product',
      },
      {
        id: '4',
        image: Img('230x110'),
        productName: 'product id',
        designer: 'Designer',
        price: '123',
        type: 'product',
      },
      {
        id: '5',
        image: Img('230x110'),
        productName: 'product id',
        designer: 'Designer',
        price: '123',
        type: 'product',
      },
      {
        id: '6',
        image: Img('230x110'),
        productName: 'Product id',
        designer: 'Designer',
        price: '123',
        type: 'product',
      },
      {
        id: '7',
        image: Img('230x110'),
        productName: 'product id',
        designer: 'Designer',
        price: '123',
        type: 'product',
      },
      {
        id: '8',
        image: Img('230x110'),
        productName: 'product id',
        designer: 'Designer',
        price: '123',
        type: 'product',
      },
    ],
    mobileViews: [
      {
        label: 'DESIGNERS',
        selected: true,
      },
      {
        label: 'PRODUCTS',
        selected: false,
      },
    ],
    assets: {
      icons: {
        search: icon(search),
        close: icon(xMark),
      },
      images: {
        notFound: icon(notFound),
      },
    },
    viewableProducts: 6,
    labels: {
      designer: 'DESIGNERS',
      product: 'PRODUCTS',
      notFound: 'No products found',
    },
    callBacks: {
      onSearch: (): void => {},
      onCloseSearch: (): void => {},
    },
  },
};

export const SingleResult: Story = {
  args: {
    designers: [
      {
        id: '0',
        name: 'Designer1',
        link: '/',
      },
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
    ],
    mobileViews: [
      {
        label: 'DESIGNERS',
        selected: true,
      },
      {
        label: 'PRODUCTS',
        selected: false,
      },
    ],
    assets: {
      icons: {
        search: icon(search),
        close: icon(xMark),
      },
      images: {
        notFound: icon(notFound),
      },
    },
    viewableProducts: 6,
    labels: {
      designer: 'DESIGNERS',
      product: 'PRODUCTS',
      notFound: 'No products found',
    },
    callBacks: {
      onSearch: (): void => {},
      onCloseSearch: (): void => {},
    },
  },
};

export const NotFoundAll: Story = {
  args: {
    designers: [],
    products: [],
    mobileViews: [
      {
        label: 'DESIGNERS',
        selected: true,
      },
      {
        label: 'PRODUCTS',
        selected: false,
      },
    ],
    assets: {
      icons: {
        search: icon(search),
        close: icon(xMark),
      },
      images: {
        notFound: icon(notFound),
      },
    },
    viewableProducts: 6,
    labels: {
      designer: 'DESIGNERS',
      product: 'PRODUCTS',
      notFound: 'No products found',
    },
    callBacks: {
      onSearch: (): void => {},
      onCloseSearch: (): void => {},
    },
  },
};

export const NotFoundProducts: Story = {
  args: {
    designers: [
      {
        id: '0',
        name: 'Designer1',
        link: '/',
      },
      {
        id: '1',
        name: 'Designer2',
        link: '/',
      },
    ],
    products: [],
    mobileViews: [
      {
        label: 'DESIGNERS',
        selected: true,
      },
      {
        label: 'PRODUCTS',
        selected: false,
      },
    ],
    assets: {
      icons: {
        search: icon(search),
        close: icon(xMark),
      },
      images: {
        notFound: icon(notFound),
      },
    },
    viewableProducts: 6,
    labels: {
      designer: 'DESIGNERS',
      product: 'PRODUCTS',
      notFound: 'No products found',
    },
    callBacks: {
      onSearch: (): void => {},
      onCloseSearch: (): void => {},
    },
  },
};

export const NotFoundDesigners: Story = {
  args: {
    designers: [],
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
      {
        id: '3',
        image: Img('230x110'),
        productName: 'Product id',
        designer: 'Designer',
        price: '123',
        type: 'product',
      },
      {
        id: '4',
        image: Img('230x110'),
        productName: 'product id',
        designer: 'Designer',
        price: '123',
        type: 'product',
      },
      {
        id: '5',
        image: Img('230x110'),
        productName: 'product id',
        designer: 'Designer',
        price: '123',
        type: 'product',
      },
      {
        id: '6',
        image: Img('230x110'),
        productName: 'Product id',
        designer: 'Designer',
        price: '123',
        type: 'product',
      },
      {
        id: '7',
        image: Img('230x110'),
        productName: 'product id',
        designer: 'Designer',
        price: '123',
        type: 'product',
      },
      {
        id: '8',
        image: Img('230x110'),
        productName: 'product id',
        designer: 'Designer',
        price: '123',
        type: 'product',
      },
    ],
    mobileViews: [
      {
        label: 'DESIGNERS',
        selected: true,
      },
      {
        label: 'PRODUCTS',
        selected: false,
      },
    ],
    assets: {
      icons: {
        search: icon(search),
        close: icon(xMark),
      },
      images: {
        notFound: icon(notFound),
      },
    },
    viewableProducts: 6,
    labels: {
      designer: 'DESIGNERS',
      product: 'PRODUCTS',
      notFound: 'No products found',
    },
    callBacks: {
      onSearch: (): void => {},
      onCloseSearch: (): void => {},
    },
  },
};
