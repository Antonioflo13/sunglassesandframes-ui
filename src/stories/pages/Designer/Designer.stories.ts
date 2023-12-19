import { Default as AnnouncementBarDefault } from '@stories/blocks/AnnouncementBar/AnnouncementBar.stories';
import { Default as GridDefault } from '@stories/blocks/Grid/Grid.stories';
import { Default as HeaderDefault } from '@stories/blocks/Header/Header.stories';
import { WithDescription as InfoBoxWithDescription } from '@stories/blocks/InfoBox/InfoBox.stories';
import type { Meta, StoryObj } from '@storybook/react';

import { Designer } from './Designer';

const metaDesigner = {
  title: 'sunglassesandframes/Pages/Designer',
  component: Designer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Designer>;

export default metaDesigner;
type Story = StoryObj<typeof metaDesigner>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    announcementBarProps: AnnouncementBarDefault.args,
    headerProps: HeaderDefault.args,
    infoBoxProps: InfoBoxWithDescription.args,
    productsPlpProps: GridDefault.args,
  },
};
