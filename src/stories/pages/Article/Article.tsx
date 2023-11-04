import { AnnouncementBar } from '@blocks/AnnouncementBar';
import { Header } from '@blocks/Header';
import { InfoBox } from '@blocks/InfoBox/InfoBox';
import { ProductsPlp } from '@blocks/ProductsPlp';

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
      <ProductsPlp {...productsPlpProps} />
    </>
  );
};
