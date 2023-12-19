import { Default as AnnouncementBarDefault } from '@stories/blocks/AnnouncementBar/AnnouncementBar.stories';
import { Default as HeaderDefault } from '@stories/blocks/Header/Header.stories';
import {
  WithDesignerAndTitle as SliderWithDesignerAndTitle,
  WithProductsAndTitle as SliderWithProductsAndTitle,
} from '@stories/blocks/Slider/Slider.stories';
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
    sliderWithProductsAndTitle: SliderWithProductsAndTitle.args,
    sliderWithDesignersAndTitle: SliderWithDesignerAndTitle.args,
  },
};
