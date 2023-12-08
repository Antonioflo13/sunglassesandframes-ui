import { InfoBox } from '@blocks/InfoBox/InfoBox';
import { ProductsList } from '@blocks/ProductsList';
import PageWrapper from '@components/PageWrapper/PageWrapper';

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
      <ProductsList {...productsPlpProps} />
    </PageWrapper>
  );
};
