import { PdpBottomCard } from '@blocks/PdpBottomCard/PdpBottomCard';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

const metaPdpImage = {
  title: 'sunglassesandframes/Blocks/PdpBottomCard',
  component: PdpBottomCard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PdpBottomCard>;

export default metaPdpImage;
type Story = StoryObj<typeof metaPdpImage>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    product: {
      name: 'PRODUCT ID',
      price: '123',
      designer: 'Designer',
      availableNumber: 0,
    },
  },
};

export const Discount: Story = {
  args: {
    product: {
      name: 'PRODUCT ID',
      price: '123',
      designer: 'Designer',
      availableNumber: 0,
      discountPrice: '100',
    },
  },
};

export const IsAvalaible: Story = {
  args: {
    product: {
      name: 'PRODUCT ID',
      price: '123',
      designer: 'Designer',
      availableNumber: 10,
    },
  },
};

Default.play = async({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('PRODUCT ID')).toBeInTheDocument();
};
