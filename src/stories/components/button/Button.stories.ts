import { Button } from '@components/button/Button';
import metaLabel, { Selected } from '@stories/components/Label/Label.stories';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { fireEvent, userEvent, within } from '@storybook/testing-library';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'sunglassesandframes/Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ...metaLabel.argTypes,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Buttons',
    fontFamily: 'artegra-bold',
  },
};

export const Outlined: Story = {
  args: {
    ...Selected.args,
    type: 'outlined',
  },
};

Default.play = async({ canvasElement, args }): Promise<void> => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole('button'));

  fireEvent.click(canvas.getByText(args.label));

  await expect(canvas.getByText(args.label)).toBeInTheDocument();
};
