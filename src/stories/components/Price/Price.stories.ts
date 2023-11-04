import { Price } from '@components/Price';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const metaPrice = {
  title: 'sunglassesandframes/Components/Price',
  component: Price,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Price>;

export default metaPrice;
type Story = StoryObj<typeof metaPrice>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    price: 123,
  },
};

export const Discount: Story = {
  args: {
    price: 123,
    discount: true,
  },
};

Default.play = async({ canvasElement, args }): Promise<void> => {
  const canvas = within(canvasElement);

  canvas.getByText(args.price);

  await expect(canvas.getByText(args.price)).toBeInTheDocument();
};

Discount.play = async({ canvasElement, args }): Promise<void> => {
  const canvas = within(canvasElement);

  canvas.getByText(args.price);

  await expect(canvas.getByText(args.price)).toBeInTheDocument();
};
