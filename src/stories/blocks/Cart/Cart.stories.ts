import { Cart } from '@blocks/Cart/Cart';
import returnBox from '@stories/assets/icons/cart/return-box.png';
import verify from '@stories/assets/icons/cart/verify.png';
import { Img } from '@stories/components/ImageWrapper/Img';
import { icon } from '@stories/components/example/icon/icon';
import type { Meta, StoryObj } from '@storybook/react';

const metaCart = {
  title: 'sunglassesandframes/Blocks/Cart',
  component: Cart,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Cart>;

export default metaCart;
type Story = StoryObj<typeof metaCart>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    products: [
      {
        id: '1',
        idLineItems: '123132',
        quantity: 1,
        titleProduct: 'PRODUCT ID',
        details: {
          price: {
            amount: 123,
            currencyCode: 'eur',
          },
        },
      },
      {
        id: '2',
        idLineItems: '123132',
        quantity: 1,
        titleProduct: 'PRODUCT ID',
        details: {
          price: {
            amount: 123,
            currencyCode: 'eur',
          },
        },
      },
    ],
    icons: [icon(returnBox), icon(verify)],
    totalPrice: {
      amount: 123,
      currencyCode: 'eur',
    },
    children: Img('160x130'),
  },
};