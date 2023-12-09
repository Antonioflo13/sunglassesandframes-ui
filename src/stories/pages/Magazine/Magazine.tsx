import { Grid } from '@blocks/Grid';
import { PageWrapper } from '@components/PageWrapper';

import { MagazineProps } from './types';

export const Magazine = ({
  announcementBarProps,
  headerProps,
  gridProps,
}: MagazineProps): JSX.Element => {
  return (
    <PageWrapper announcementBarProps={announcementBarProps} withNavbar={headerProps}>
      <Grid {...gridProps} />
    </PageWrapper>
  );
};
