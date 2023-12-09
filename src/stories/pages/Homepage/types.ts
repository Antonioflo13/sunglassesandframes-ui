import { AnnouncementBarProps } from '@blocks/AnnouncementBar';
import { HeaderProps } from '@blocks/Header';
import { SliderProps } from '@blocks/Slider';

export type HomepageProps = {
  announcementBarProps: AnnouncementBarProps;
  headerProps: HeaderProps;
  sliderWithProductsAndTitle: SliderProps;
  sliderWithDesignersAndTitle: SliderProps;
};
