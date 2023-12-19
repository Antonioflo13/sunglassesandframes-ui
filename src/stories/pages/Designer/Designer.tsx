import { Grid } from '@blocks/Grid';
import { InfoBox } from '@blocks/InfoBox/InfoBox';
import { PageWrapper } from '@components/PageWrapper';

import { DesignerProps } from './types';

export const Designer = ({
  announcementBarProps,
  headerProps,
  infoBoxProps,
  productsPlpProps,
}: DesignerProps): JSX.Element => {
  return (
    <PageWrapper announcementBarProps={announcementBarProps} withNavbar={headerProps}>
      <InfoBox {...infoBoxProps} />
      <Grid {...productsPlpProps} />
    </PageWrapper>
  );
};
