import { PdpMobileBuy } from '@blocks/PdpMobileBuy/PdpMobileBuy';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

const metaPdpMobileBuy = {
  title: 'sunglassesandframes/Blocks/PdpMobileBuy',
  component: PdpMobileBuy,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PdpMobileBuy>;

export default metaPdpMobileBuy;
type Story = StoryObj<typeof metaPdpMobileBuy>;

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
