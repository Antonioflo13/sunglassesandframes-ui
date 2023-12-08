import { ProductsList } from '@blocks/ProductsList';
import { SectionSlider } from '@blocks/SectionSlider';
import PageWrapper from '@components/PageWrapper/PageWrapper';

import { HomepageProps } from './types';

export const HomePage = ({
  announcementBarProps,
  headerProps,
  sectionSliderProps,
  productsPlpProps,
}: HomepageProps): JSX.Element => {
  return (
    <PageWrapper announcementBarProps={announcementBarProps} withNavbar={headerProps}>
      <SectionSlider {...sectionSliderProps} />
      <ProductsList {...productsPlpProps} />
    </PageWrapper>
  );
};
