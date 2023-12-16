import { Default as AnnouncementBarDefault } from '@stories/blocks/AnnouncementBar/AnnouncementBar.stories';
import { Default as HeaderDefault } from '@stories/blocks/Header/Header.stories';
import { Default as SearchDefault } from '@stories/blocks/Search/Search.stories';
import type { Meta, StoryObj } from '@storybook/react';

import { SearchPage } from './Search';

const metaSearch = {
  title: 'sunglassesandframes/Pages/Search',
  component: SearchPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchPage>;

export default metaSearch;
type Story = StoryObj<typeof metaSearch>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    announcementBarProps: AnnouncementBarDefault.args,
    headerProps: HeaderDefault.args,
    searchProps: SearchDefault.args
  },
};
