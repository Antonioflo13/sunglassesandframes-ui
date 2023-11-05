import { AnnouncementBar } from '@blocks/AnnouncementBar';
import { Header } from '@blocks/Header';
import { InfoBox } from '@blocks/InfoBox/InfoBox';
import { ProductsList } from '@blocks/ProductsList';

import { ArticleProps } from './types';

export const Article = ({
  announcementBarProps,
  headerProps,
  infoBoxProps,
  productsPlpProps,
}: ArticleProps): JSX.Element => {
  return (
    <>
      <AnnouncementBar {...announcementBarProps} />
      <Header {...headerProps} />
      <InfoBox {...infoBoxProps} />
      <ProductsList {...productsPlpProps} />
    </>
  );
};
