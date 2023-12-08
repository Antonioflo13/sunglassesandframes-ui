import { InfoBox } from '@blocks/InfoBox/InfoBox';
import { ProductsList } from '@blocks/ProductsList';
import PageWrapper from '@components/PageWrapper/PageWrapper';

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
      <ProductsList {...productsPlpProps} />
    </PageWrapper>
  );
};
