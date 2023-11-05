import returnBox from '@stories/assets/icons/cart/return-box.png';
import verify from '@stories/assets/icons/cart/verify.png';
import { Default as AnnouncementBarDefault } from '@stories/blocks/AnnouncementBar/AnnouncementBar.stories';
import { Default as HeaderDefault } from '@stories/blocks/Header/Header.stories';
import { Img } from '@stories/components/ImageWrapper/Img';
import { icon } from '@stories/components/example/icon/icon';
import type { Meta, StoryObj } from '@storybook/react';

import { CartPage } from './Cart';

const metaCartPage = {
  title: 'sunglassesandframes/Pages/Cart',
  component: CartPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CartPage>;

export default metaCartPage;
type Story = StoryObj<typeof metaCartPage>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    announcementBarProps: AnnouncementBarDefault.args,
    headerProps: HeaderDefault.args,
    CartProps: {
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
      updateCart: ({ mode, idLineItems }) => console.log(mode, idLineItems),
      goToCheckout: () => console.log('ciao'),
    },
  },
};