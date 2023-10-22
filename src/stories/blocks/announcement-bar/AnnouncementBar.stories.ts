import { AnnouncementBar } from '@blocks/announcement-bar/AnnouncementBar';
import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

const metaAnnouncementBar = {
  title: 'sunglassesandframes/Blocks/AnnouncementBar',
  component: AnnouncementBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AnnouncementBar>;

export default metaAnnouncementBar;
type Story = StoryObj<typeof metaAnnouncementBar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: 'Announcement text',
  },
};

Default.play = async({ canvasElement, args }): Promise<void> => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByText(args.label));

  await expect(canvas.getByText(args.label)).toBeInTheDocument();
};
