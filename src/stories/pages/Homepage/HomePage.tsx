import { Slider } from '@blocks/Slider';
import { PageWrapper } from '@components/PageWrapper';

import { HomepageProps } from './types';

export const HomePage = ({
  announcementBarProps,
  headerProps,
  sliderWithProductsAndTitle,
  sliderWithDesignersAndTitle,
}: HomepageProps): JSX.Element => {
  return (
    <PageWrapper announcementBarProps={announcementBarProps} withNavbar={headerProps}>
      <Slider {...sliderWithDesignersAndTitle} />
      <Slider {...sliderWithProductsAndTitle} />
    </PageWrapper>
  );
};
