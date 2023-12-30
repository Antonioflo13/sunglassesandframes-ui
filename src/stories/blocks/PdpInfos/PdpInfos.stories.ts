import { PdpInfos } from '@blocks/PdpDesktop/PdpInfos/PdpInfos';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

const metaPdpInfos = {
  title: 'sunglassesandframes/Blocks/PdpInfos',
  component: PdpInfos,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PdpInfos>;

export default metaPdpInfos;
type Story = StoryObj<typeof metaPdpInfos>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    infos: [
      {
        title: 'HEADING 4',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate, leo ut dapibus dictum, orci nulla fermentum quam, et ullamcorper libero ipsum dapibus risus. Nulla porta lacus sit amet lorem consectetur, sodales varius neque ultricies. Nulla cursus lacus dui, vitae pharetra mauris porta a.',
      },
      {
        title: 'HEADING 5',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate, leo ut dapibus dictum, orci nulla fermentum quam, et ullamcorper libero ipsum dapibus risus. Nulla porta lacus sit amet lorem consectetur, sodales varius neque ultricies. Nulla cursus lacus dui, vitae pharetra mauris porta a.',
      },
    ],
  },
};

Default.play = async({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('HEADING 5')).toBeInTheDocument();
};
