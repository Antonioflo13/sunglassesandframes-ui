import { PdpBuy } from '@blocks/PdpDesktop/PdpBuy/PdpBuy';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

const metaPdpBuy = {
  title: 'sunglassesandframes/Blocks/PdpBuy',
  component: PdpBuy,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PdpBuy>;

export default metaPdpBuy;
type Story = StoryObj<typeof metaPdpBuy>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    buttonLabel: 'ADD TO SHOPPING BAG',
    product: {
      name: 'PRODUCT ID',
      price: {
        amount: '310.0',
        currencyCode: 'EUR',
      },
      vendor: 'Designer',
      totalInventory: 0,
    },
  },
};

export const Discount: Story = {
  args: {
    buttonLabel: 'ADD TO SHOPPING BAG',
    product: {
      name: 'PRODUCT ID',
      price: {
        amount: '310.0',
        currencyCode: 'EUR',
      },
      vendor: 'Designer',
      totalInventory: 0,
      discountPrice: '100',
    },
  },
};

export const IsAvalaible: Story = {
  args: {
    buttonLabel: 'ADD TO SHOPPING BAG',
    product: {
      name: 'PRODUCT ID',
      price: {
        amount: '310.0',
        currencyCode: 'EUR',
      },
      vendor: 'Designer',
      totalInventory: 10,
    },
  },
};

Default.play = async({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('PRODUCT ID')).toBeInTheDocument();
};
