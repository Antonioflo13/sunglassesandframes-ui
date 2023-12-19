import { PdpMobile } from '@blocks/PdpMobile/PdpMobile';
import { Img } from '@stories/components/ImageWrapper/Img';
import type { Meta, StoryObj } from '@storybook/react';

const metaPdpMobile = {
  title: 'sunglassesandframes/Blocks/PdpMobile',
  component: PdpMobile,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PdpMobile>;

export default metaPdpMobile;
type Story = StoryObj<typeof metaPdpMobile>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    initialSlide: 0,
    pdpBottomCardButtonLabel: 'ADD TO SHOPPING BAG',
    products: [
      {
        id: 'gid://shopify/Product/8523554685264',
        name: '0PR 17WS',
        description:
          'These Prada 0PR 17WS 1AB5S0 sunglasses feature black acetate shape available in international fit and size 49. The 0PR 17WS UPC code is 8056597418478 and it’s made in Italy. These sunglasses come with their Prada original case and tags. Size: 49 Bridge: 20 Temple: 145 Fit: INTERNATIONAL Made in: ITALY Material: ACETATE',
        vendor: 'Prada',
        totalInventory: 61,
        images: [
          {
            id: 'gid://shopify/ProductImage/50978522759504',
            image: Img('230x110'),
          },
          {
            id: 'gid://shopify/ProductImage/50978524594512',
            image: Img('230x110'),
          },
          {
            id: 'gid://shopify/ProductImage/50978528100688',
            image: Img('230x110'),
          },
        ],
        price: {
          amount: '310.0',
          currencyCode: 'EUR',
        },
      },
      {
        id: 'gid://shopify/Product/8523554685264',
        name: '0PR 17WS',
        description:
          'These Prada 0PR 17WS 1AB5S0 sunglasses feature black acetate shape available in international fit and size 49. The 0PR 17WS UPC code is 8056597418478 and it’s made in Italy. These sunglasses come with their Prada original case and tags. Size: 49 Bridge: 20 Temple: 145 Fit: INTERNATIONAL Made in: ITALY Material: ACETATE',
        vendor: 'Prada',
        totalInventory: 61,
        images: [
          {
            id: 'gid://shopify/ProductImage/50978522759504',
            image: Img('230x110'),
          },
          {
            id: 'gid://shopify/ProductImage/50978524594512',
            image: Img('230x110'),
          },
          {
            id: 'gid://shopify/ProductImage/50978528100688',
            image: Img('230x110'),
          },
        ],
        price: {
          amount: '310.0',
          currencyCode: 'EUR',
        },
      },
    ],
    callback: idx => console.log(idx),
  },
};
