import { Default as AnnouncementBarDefault } from '@stories/blocks/AnnouncementBar/AnnouncementBar.stories';
import { Default as HeaderDefault } from '@stories/blocks/Header/Header.stories';
import { WithDate as InfoBoxDefault } from '@stories/blocks/InfoBox/InfoBox.stories';
import type { Meta, StoryObj } from '@storybook/react';

import { Magazine } from './Magazine';

const metaMagazine = {
  title: 'sunglassesandframes/Pages/Magazine',
  component: Magazine,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Magazine>;

export default metaMagazine;
type Story = StoryObj<typeof metaMagazine>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    announcementBarProps: AnnouncementBarDefault.args,
    headerProps: HeaderDefault.args,
    articles: [InfoBoxDefault.args, InfoBoxDefault.args, InfoBoxDefault.args],
  },
};
