import { Label } from '@components/Label/Label';
import { FontFamilies, LabelTypes, TextSizes } from '@components/Label/labelTypes';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

const metaLabel = {
  title: 'sunglassesandframes/Components/Label',
  component: Label,
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
} satisfies Meta<typeof Label>;

export default metaLabel;
type Story = StoryObj<typeof metaLabel>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Label',
    fontFamily: FontFamilies.Artegra,
  },
};

export const InStock: Story = {
  args: {
    label: '120',
    fontFamily: FontFamilies.HelveticaRegular,
    labelType: LabelTypes.inStock,
    textSize: TextSizes.Lg,
  },
};

export const Selected: Story = {
  args: {
    label: 'LABEL SELECTED',
    fontFamily: FontFamilies.HelveticaLight,
    labelType: LabelTypes.Selected,
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
