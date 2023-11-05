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
    children: Img('200x300'),
    products: [
      {
        id: 'gid://shopify/Product/8523554685264',
        name: '0PR 17WS',
        description:
          'These Prada 0PR 17WS 1AB5S0 sunglasses feature black acetate shape available in international fit and size 49. The 0PR 17WS UPC code is 8056597418478 and it’s made in Italy. These sunglasses come with their Prada original case and tags. Size: 49 Bridge: 20 Temple: 145 Fit: INTERNATIONAL Made in: ITALY Material: ACETATE',
        descriptionHtml:
          'These Prada 0PR 17WS 1AB5S0 sunglasses feature black acetate shape available in international fit and size 49. The 0PR 17WS UPC code is 8056597418478 and it’s made in Italy.  These sunglasses come with their Prada original case and tags.<br><br> Size: <b>49</b><br>  Bridge: <b>20 </b><br>  Temple: <b>145 </b><br>  Fit: <b>INTERNATIONAL </b><br>  Made in: <b>ITALY </b><br>  Material: <b>ACETATE</b>',
        vendor: 'Prada',
        availableForSale: true,
        totalInventory: 61,
        options: [
          {
            name: 'Taglia',
            values: ['49'],
          },
          {
            name: 'Color',
            values: ['BLACK'],
          },
        ],
        metafields: [{ value: 'asdasd' }, { value: 'asdasd' }],
        images: [
          {
            id: 'gid://shopify/ProductImage/50978522759504',
            src: 'https://cdn.shopify.com/s/files/1/0522/3156/9587/files/6d893cf24f938c08d3e5c833931e3585.jpg.webp?v=1685036779',
            altText: 'alt',
          },
          {
            id: 'gid://shopify/ProductImage/50978524594512',
            src: 'https://cdn.shopify.com/s/files/1/0522/3156/9587/files/679c1cdd60183559804c915c3bf9802a.jpg.webp?v=1685036797',
            altText: 'alt',
          },
          {
            id: 'gid://shopify/ProductImage/50978528100688',
            src: 'https://cdn.shopify.com/s/files/1/0522/3156/9587/files/dddd24d32a8ed8fa3239188cf593cc83.jpg.webp?v=1685036835',
            altText: 'alt',
          },
        ],
        price: {
          amount: '310.0',
          currencyCode: 'EUR',
        },
        variantId: 'gid://shopify/ProductVariant/46771481018704',
      },
      {
        id: 'gid://shopify/Product/8523554685264',
        name: '0PR 17WS',
        description:
          'These Prada 0PR 17WS 1AB5S0 sunglasses feature black acetate shape available in international fit and size 49. The 0PR 17WS UPC code is 8056597418478 and it’s made in Italy. These sunglasses come with their Prada original case and tags. Size: 49 Bridge: 20 Temple: 145 Fit: INTERNATIONAL Made in: ITALY Material: ACETATE',
        descriptionHtml:
          'These Prada 0PR 17WS 1AB5S0 sunglasses feature black acetate shape available in international fit and size 49. The 0PR 17WS UPC code is 8056597418478 and it’s made in Italy.  These sunglasses come with their Prada original case and tags.<br><br> Size: <b>49</b><br>  Bridge: <b>20 </b><br>  Temple: <b>145 </b><br>  Fit: <b>INTERNATIONAL </b><br>  Made in: <b>ITALY </b><br>  Material: <b>ACETATE</b>',
        vendor: 'Prada',
        availableForSale: true,
        totalInventory: 61,
        options: [
          {
            name: 'Taglia',
            values: ['49'],
          },
          {
            name: 'Color',
            values: ['BLACK'],
          },
        ],
        metafields: [{ value: 'asdasd' }, { value: 'asdasd' }],
        images: [
          {
            id: 'gid://shopify/ProductImage/50978522759504',
            src: 'https://cdn.shopify.com/s/files/1/0522/3156/9587/files/6d893cf24f938c08d3e5c833931e3585.jpg.webp?v=1685036779',
            altText: 'alt',
          },
          {
            id: 'gid://shopify/ProductImage/50978524594512',
            src: 'https://cdn.shopify.com/s/files/1/0522/3156/9587/files/679c1cdd60183559804c915c3bf9802a.jpg.webp?v=1685036797',
            altText: 'alt',
          },
          {
            id: 'gid://shopify/ProductImage/50978528100688',
            src: 'https://cdn.shopify.com/s/files/1/0522/3156/9587/files/dddd24d32a8ed8fa3239188cf593cc83.jpg.webp?v=1685036835',
            altText: 'alt',
          },
        ],
        price: {
          amount: '310.0',
          currencyCode: 'EUR',
        },
        variantId: 'gid://shopify/ProductVariant/46771481018704',
      },
    ],
    callback: idx => console.log(idx),
  },
};
