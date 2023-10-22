import { Typography } from '@components/typography/typography';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

const metaTypography = {
  title: 'sunglassesandframes/Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    fontFamily: {
      control: 'select',
    },
  },
} satisfies Meta<typeof Typography>;

export default metaTypography;
type Story = StoryObj<typeof metaTypography>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Label',
    fontFamily: 'artegra',
  },
};

export const InStock: Story = {
  args: {
    label: '120',
    fontFamily: 'helvetica-regular',
    labelType: 'in-stock',
    textSize: 'lg',
  },
};

export const Selected: Story = {
  args: {
    label: 'LABEL SELECTED',
    fontFamily: 'helvetica-light',
    labelType: 'selected',
  },
};

Default.play = async({ canvasElement, args }): Promise<void> => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByText(args.label));

  await expect(canvas.getByText(args.label)).toBeInTheDocument();
};

InStock.play = async({ canvasElement, args }): Promise<void> => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByText(args.label));

  await expect(canvas.getByText(args.label)).toBeInTheDocument();
};

Selected.play = async({ canvasElement, args }): Promise<void> => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByText(args.label));

  await expect(canvas.getByText(args.label)).toBeInTheDocument();
};
