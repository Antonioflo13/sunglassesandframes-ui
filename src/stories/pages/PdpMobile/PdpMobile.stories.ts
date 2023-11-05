import { PdpMobileProps } from '@blocks/PdpMobile/types';
import { Default as AnnouncementBarDefault } from '@stories/blocks/AnnouncementBar/AnnouncementBar.stories';
import { Default as HeaderDefault } from '@stories/blocks/Header/Header.stories';
import { Default as PdpMobileDefault } from '@stories/blocks/PdpMobile/PdpMobile.stories';
import type { Meta, StoryObj } from '@storybook/react';

import { PdpMobilePage } from './PdpMobile';

const metaPdpMobilePage = {
  title: 'sunglassesandframes/Pages/PdpMobile',
  component: PdpMobilePage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PdpMobilePage>;

export default metaPdpMobilePage;
type Story = StoryObj<typeof metaPdpMobilePage>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    announcementBarProps: AnnouncementBarDefault.args,
    headerProps: HeaderDefault.args,
    pdpMobileProps: PdpMobileDefault.args as PdpMobileProps,
  },
};
