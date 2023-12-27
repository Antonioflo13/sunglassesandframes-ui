import { PdpRelatedColors } from '@blocks/PdpDesktop/PdpRelatedColors/PdpRelatedColors';
import { Img } from '@stories/components/ImageWrapper/Img';
import type { Meta, StoryObj } from '@storybook/react';

const metaPdpRelatedColors = {
  title: 'sunglassesandframes/Blocks/PdpRelatedColors',
  component: PdpRelatedColors,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PdpRelatedColors>;

export default metaPdpRelatedColors;
type Story = StoryObj<typeof metaPdpRelatedColors>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    images: [
      {
        id: 'gid://shopify/ProductImage/50978522759504',
        image: Img('175x150'),
      },
      {
        id: 'gid://shopify/ProductImage/50978524594512',
        image: Img('175x150'),
      },
      {
        id: 'gid://shopify/ProductImage/50978528100688',
        image: Img('175x150'),
      },
    ],
  },
};
