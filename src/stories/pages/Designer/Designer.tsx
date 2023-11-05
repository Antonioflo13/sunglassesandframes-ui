import { AnnouncementBar } from '@blocks/AnnouncementBar';
import { Header } from '@blocks/Header';
import { InfoBox } from '@blocks/InfoBox/InfoBox';
import { ProductsList } from '@blocks/ProductsList';

import { DesignerProps } from './types';

export const Designer = ({
  announcementBarProps,
  headerProps,
  infoBoxProps,
  productsPlpProps,
}: DesignerProps): JSX.Element => {
  return (
    <>
      <AnnouncementBar {...announcementBarProps} />
      <Header {...headerProps} />
      <InfoBox {...infoBoxProps} />
      <ProductsList {...productsPlpProps} />
    </>
  );
};
