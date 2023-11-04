import { AnnouncementBar } from '@blocks/AnnouncementBar';
import { Header } from '@blocks/Header';
import { InfoBox } from '@blocks/InfoBox/InfoBox';

import { MagazineProps } from './types';

export const Magazine = ({
  announcementBarProps,
  headerProps,
  articles,
}: MagazineProps): JSX.Element => {
  return (
    <>
      <AnnouncementBar {...announcementBarProps} />
      <Header {...headerProps} />
      {articles.map((article, idx) => (
        <InfoBox key={idx} {...article} />
      ))}
    </>
  );
};
