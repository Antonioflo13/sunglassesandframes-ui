import { Header } from '@blocks/header/Header';
import { HeaderItemTypes } from '@components/header-item/header-item-types';
import { sunglassesLogo } from '@stories/components/example/logo/sunglassesLogo';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

const metaHeader = {
  title: 'sunglassesandframes/Blocks/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default metaHeader;
type Story = StoryObj<typeof metaHeader>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    items: [
      {
        type: HeaderItemTypes.Label,
        label: 'Home',
      },
      { type: HeaderItemTypes.Img },
      {
        type: HeaderItemTypes.Icon,
        label: 'Icon',
      },
      {
        type: HeaderItemTypes.Label,
        label: 'Cart (0)',
      },
    ],
    children: sunglassesLogo(),
  },
};

Default.play = async({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);

  await expect(canvas.getByRole('img')).toBeInTheDocument();
};
