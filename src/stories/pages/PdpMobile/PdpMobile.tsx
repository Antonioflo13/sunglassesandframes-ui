import { AnnouncementBar } from '@blocks/AnnouncementBar';
import { Header } from '@blocks/Header';
import { PdpMobile } from '@blocks/PdpMobile/PdpMobile';

import { PdpMobilePageProps } from './types';

export const PdpMobilePage = ({
  announcementBarProps,
  headerProps,
  pdpMobileProps,
}: PdpMobilePageProps): JSX.Element => {
  return (
    <>
      <AnnouncementBar {...announcementBarProps} />
      <Header {...headerProps} />
      <PdpMobile {...pdpMobileProps} />
    </>
  );
};
