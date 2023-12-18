import { PdpImages } from '@blocks/PdpDesktop/PdpImages/PdpImages';
import { Img } from '@stories/components/ImageWrapper/Img';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

const metaPdpImages = {
  title: 'sunglassesandframes/Blocks/PdpImagesContainer',
  component: PdpImages,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PdpImages>;

export default metaPdpImages;
type Story = StoryObj<typeof metaPdpImages>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    images: [
      {
        id: 1,
        image: Img('550x350'),
      },
    ],
  },
};

Default.play = async({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);

  await expect(canvas.getByRole('img')).toBeInTheDocument();
};
