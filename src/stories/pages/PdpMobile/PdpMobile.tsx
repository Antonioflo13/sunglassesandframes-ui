import { PdpMobile } from '@blocks/PdpMobile/PdpMobile';
import { PageWrapper } from '@components/PageWrapper';

import { PdpMobilePageProps } from './types';

export const PdpMobilePage = ({
  announcementBarProps,
  headerProps,
  pdpMobileProps,
}: PdpMobilePageProps): JSX.Element => {
  return (
    <PageWrapper
      withAnnouncementBar={false}
      announcementBarProps={announcementBarProps}
      withNavbar={headerProps}
      withSpacing={false}
    >
      <PdpMobile {...pdpMobileProps} />
    </PageWrapper>
  );
};
