import { Slider } from '@blocks/Slider/Slider';
import { Img } from '@stories/components/ImageWrapper/Img';
import type { Meta, StoryObj } from '@storybook/react';

const metaSlider = {
  title: 'sunglassesandframes/Blocks/Slider',
  component: Slider,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default metaSlider;
type Story = StoryObj<typeof metaSlider>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WithProducts: Story = {
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
      {
        id: '2',
        image: Img('230x110'),
        productName: 'product id',
        designer: 'Designer',
        price: '123',
        type: 'product',
      },
    ],
    slidesPerView: 2,
    spaceBetween: 50,
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  },
};

export const WithProductsAndTitle: Story = {
  args: {
    title: {
      Tag: 'h3',
      label: 'section title',
      fontFamily: 'helvetica-medium',
      textSize: 'sm',
    },
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
      {
        id: '2',
        image: Img('230x110'),
        productName: 'product id',
        designer: 'Designer',
        price: '123',
        type: 'product',
      },
    ],
    slidesPerView: 2,
    spaceBetween: 50,
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 36,
      },
    },
  },
};

export const WithDesigner: Story = {
  args: {
    items: [
      {
        id: '0',
        image: Img('230x110'),
        title: {
          label: 'post title',
          fontFamily: 'helvetica-medium',
          textSize: 'md',
          typographyType: 'shadow',
        },
        type: 'designer',
      },
      {
        id: '1',
        image: Img('230x110'),
        title: {
          label: 'post title',
          fontFamily: 'helvetica-medium',
          textSize: 'md',
          typographyType: 'shadow',
        },
        type: 'designer',
      },
      {
        id: '2',
        image: Img('230x110'),
        title: {
          label: 'post title',
          fontFamily: 'helvetica-medium',
          textSize: 'md',
          typographyType: 'shadow',
        },
        type: 'designer',
      },
      {
        id: '3',
        image: Img('230x110'),
        title: {
          label: 'post title',
          fontFamily: 'helvetica-medium',
          textSize: 'md',
          typographyType: 'shadow',
        },
        type: 'designer',
      },
    ],
    slidesPerView: 1.5,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 45,
      },
    },
  },
};

export const WithDesignerAndTitle: Story = {
  args: {
    title: {
      Tag: 'h3',
      label: 'section title',
      fontFamily: 'helvetica-medium',
      textSize: 'sm',
    },
    items: [
      {
        id: '0',
        image: Img('230x110'),
        title: {
          label: 'post title',
          fontFamily: 'helvetica-medium',
          textSize: 'md',
          typographyType: 'shadow',
        },
        type: 'designer',
      },
      {
        id: '1',
        image: Img('230x110'),
        title: {
          label: 'post title',
          fontFamily: 'helvetica-medium',
          textSize: 'md',
          typographyType: 'shadow',
        },
        type: 'designer',
      },
      {
        id: '2',
        image: Img('230x110'),
        title: {
          label: 'post title',
          fontFamily: 'helvetica-medium',
          textSize: 'md',
          typographyType: 'shadow',
        },
        type: 'designer',
      },
      {
        id: '3',
        image: Img('230x110'),
        title: {
          label: 'post title',
          fontFamily: 'helvetica-medium',
          textSize: 'md',
          typographyType: 'shadow',
        },
        type: 'designer',
      },
    ],
    slidesPerView: 1.5,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 45,
      },
    },
  },
};
