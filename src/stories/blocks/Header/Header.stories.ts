import { Header } from '@blocks/Header/Header';
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
    blocks: [
      {
        type: 'left',
        items: [{
          type: 'label',
          label: 'HOME',
          callback: () => console.log('ciao'),
        }],
      },
      {
        type: 'middle-left',
        items: [{
          type: 'label',
          label: 'MAGAZINE',
          callback: () => console.log('ciao'),
        },
        {
          type: 'label',
          label: 'DESIGNER',
          callback: () => console.log('ciao'),
        },
        {
          type: 'label',
          label: 'SHOP BY',
          callback: () => console.log('ciao'),
        }]
      },
      {
        type: 'center',
        items: [
          { type: 'logo',
            image: {
              element: sunglassesLogo()
            },
            callback: () => console.log('ciao')
          },

        ],
      },
      {
        type: 'middle-right',
        items: [
          {
            type: 'label',
            label: 'icon',
            callback: () => console.log('ciao'),
          },
          {
            type: 'label',
            label: 'CART (0)',
            callback: () => console.log('ciao'),
          },
        ],
      },
      {
        type: 'right',
        items: [
          {
            type: 'label',
            label: 'icon',
            callback: () => console.log('ciao'),
          },
          {
            type: 'label',
            label: 'CART (0)',
            callback: () => console.log('ciao'),
          },
        ],
      },
    ],
  },
};

Default.play = async({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);

  await expect(canvas.getByRole('img')).toBeInTheDocument();
};
