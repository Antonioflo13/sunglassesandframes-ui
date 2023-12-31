import { Typography } from '@components/Typography/Typography';
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

export const Selected: Story = {
  args: {
    label: 'LABEL SELECTED',
    fontFamily: 'helvetica-light',
    typographyType: 'selected',
  },
};

Default.play = async({ canvasElement, args }): Promise<void> => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByText(args.label));

  await expect(canvas.getByText(args.label)).toBeInTheDocument();
};

Selected.play = async({ canvasElement, args }): Promise<void> => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByText(args.label));

  await expect(canvas.getByText(args.label)).toBeInTheDocument();
};
