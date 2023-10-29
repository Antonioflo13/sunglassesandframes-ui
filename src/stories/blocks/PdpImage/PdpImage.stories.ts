import { PdpImage } from '@blocks/PdpImage';
import { Img } from '@stories/components/ImageWrapper/Img';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

const metaPdpImage = {
  title: 'sunglassesandframes/Blocks/PdpImage',
  component: PdpImage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PdpImage>;

export default metaPdpImage;
type Story = StoryObj<typeof metaPdpImage>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: Img('390x440'),
  },
};

Default.play = async({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);

  await expect(canvas.getByRole('img')).toBeInTheDocument();
};
