import { AnnouncementBarProps } from '@blocks/AnnouncementBar';
import { GridProps } from '@blocks/Grid';
import { HeaderProps } from '@blocks/Header';
import { InfoBoxprops } from '@blocks/InfoBox/types';

export type ArticleProps = {
  announcementBarProps: AnnouncementBarProps;
  headerProps: HeaderProps;
  infoBoxProps: InfoBoxprops;
  productsPlpProps: GridProps;
};
