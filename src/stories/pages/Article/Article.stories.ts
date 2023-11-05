import { Default as AnnouncementBarDefault } from '@stories/blocks/AnnouncementBar/AnnouncementBar.stories';
import { Default as HeaderDefault } from '@stories/blocks/Header/Header.stories';
import { WithDateAndDescription as InfoBoxWithDateAndDescription } from '@stories/blocks/InfoBox/InfoBox.stories';
import { WithoutTitle as ProductsListWithoutTitle } from '@stories/blocks/ProductsList/ProductsList.stories';
import type { Meta, StoryObj } from '@storybook/react';

import { Article } from './Article';

const metaArticle = {
  title: 'sunglassesandframes/Pages/Article',
  component: Article,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Article>;

export default metaArticle;
type Story = StoryObj<typeof metaArticle>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    announcementBarProps: AnnouncementBarDefault.args,
    headerProps: HeaderDefault.args,
    infoBoxProps: InfoBoxWithDateAndDescription.args,
    productsPlpProps: ProductsListWithoutTitle.args,
  },
};
