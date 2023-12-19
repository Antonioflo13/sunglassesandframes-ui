import { CartSummaryDesktop } from '@blocks/CartSummaryDesktop';
import returnBox from '@stories/assets/icons/cart/return-box.png';
import verify from '@stories/assets/icons/cart/verify.png';
import { icon } from '@stories/components/example/icon/icon';
import type { Meta, StoryObj } from '@storybook/react';

const metaCartSummaryDesktop = {
  title: 'sunglassesandframes/Blocks/CartSummaryDesktop',
  component: CartSummaryDesktop,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CartSummaryDesktop>;

export default metaCartSummaryDesktop;
type Story = StoryObj<typeof metaCartSummaryDesktop>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    buttonLabel: 'BUTTONS',
    icons: [
      { icon: icon(verify),
        label: 'Original and Certified' },
      { icon: icon(returnBox),
        label: '14 days return delivery' },
    ],
    totalPrice: {
      amount: 123,
      currencyCode: 'eur',
    },
  },
};
