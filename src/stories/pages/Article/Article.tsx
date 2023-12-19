import { Grid } from '@blocks/Grid';
import { InfoBox } from '@blocks/InfoBox';
import { PageWrapper } from '@components/PageWrapper';

import { ArticleProps } from './types';

export const Article = ({
  announcementBarProps,
  headerProps,
  infoBoxProps,
  productsPlpProps,
}: ArticleProps): JSX.Element => {
  return (
    <PageWrapper announcementBarProps={announcementBarProps} withNavbar={headerProps}>
      <InfoBox {...infoBoxProps} />
      <Grid {...productsPlpProps} />
    </PageWrapper>
  );
};
