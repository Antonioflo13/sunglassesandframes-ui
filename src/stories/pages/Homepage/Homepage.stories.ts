import { Default as AnnouncementBarDefault } from '@stories/blocks/AnnouncementBar/AnnouncementBar.stories';
import { Default as HeaderDefault } from '@stories/blocks/Header/Header.stories';
import { Default as ProductsListDefault } from '@stories/blocks/ProductsList/ProductsList.stories';
import { Default as SectionSliderDefault } from '@stories/blocks/SectionSlider/SectionSlider.stories';
import type { Meta, StoryObj } from '@storybook/react';

import { HomePage } from './HomePage';

const metaHomepage = {
  title: 'sunglassesandframes/Pages/Homepage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HomePage>;

export default metaHomepage;
type Story = StoryObj<typeof metaHomepage>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    announcementBarProps: AnnouncementBarDefault.args,
    headerProps: HeaderDefault.args,
    sectionSliderProps: SectionSliderDefault.args,
    productsPlpProps: ProductsListDefault.args,
  },
};
