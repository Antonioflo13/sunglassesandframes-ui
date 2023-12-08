import { Header } from '@blocks/Header';
import { InfoBox } from '@blocks/InfoBox/InfoBox';
import PageWrapper from '@components/PageWrapper/PageWrapper';

import { MagazineProps } from './types';

export const Magazine = ({
  announcementBarProps,
  headerProps,
  articles,
}: MagazineProps): JSX.Element => {
  return (
    <PageWrapper announcementBarProps={announcementBarProps}>
      <Header {...headerProps} />
      {articles.map((article, idx) => (
        <InfoBox key={idx} {...article} />
      ))}
    </PageWrapper>
  );
};
