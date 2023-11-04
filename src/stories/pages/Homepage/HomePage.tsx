import { AnnouncementBar } from '@blocks/AnnouncementBar';
import { Header } from '@blocks/Header';
import { ProductsPlp } from '@blocks/ProductsPlp';
import { SectionSlider } from '@blocks/SectionSlider';

import { HomepageProps } from './types';

export const HomePage = ({
  announcementBarProps,
  headerProps,
  sectionSliderProps,
  productsPlpProps,
}: HomepageProps): JSX.Element => {
  return (
    <>
      <AnnouncementBar {...announcementBarProps} />
      <Header {...headerProps} />
      <SectionSlider {...sectionSliderProps} />
      <ProductsPlp {...productsPlpProps} />
    </>
  );
};
