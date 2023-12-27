import { Sidebar } from '@blocks/Sidebar/Sidebar';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

const metaSidebar = {
  title: 'sunglassesandframes/Blocks/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default metaSidebar;
type Story = StoryObj<typeof metaSidebar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    menuItems: [
      { type: 'menu-item',
        label: 'MAGAZINE' },
      { type: 'menu-item',
        label: 'OUR DESIGNERS' },
      {
        type: 'menu-item',
        label: 'TREND',
        subItems: [
          { type: 'menu-item',
            label: 'unusual' },
          { type: 'menu-item',
            label: 'unusual' },
          { type: 'menu-item',
            label: 'unusual' },
          { type: 'menu-item',
            label: 'unusual' },
        ],
      },
    ],
    viewAllLabel: {
      type: 'view-all',
      label: 'View all',
    },
  },
};

Default.play = async({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);

  await expect(canvas.getByText('View all')).toBeInTheDocument();
};
