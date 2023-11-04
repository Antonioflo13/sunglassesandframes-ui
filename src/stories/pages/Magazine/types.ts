import { AnnouncementBarProps } from '@blocks/AnnouncementBar';
import { HeaderProps } from '@blocks/Header';
import { InfoBoxprops } from '@blocks/InfoBox/types';

export type MagazineProps = {
  announcementBarProps: AnnouncementBarProps;
  headerProps: HeaderProps;
  articles: InfoBoxprops[];
};
