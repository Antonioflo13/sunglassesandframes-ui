import { AnnouncementBar } from '@blocks/AnnouncementBar';
import { Header } from '@blocks/Header';
import { Search } from '@blocks/Search/Search';

import { SearchPageProps } from './types';

export const SearchPage = ({ announcementBarProps,
  headerProps, searchProps }: SearchPageProps): JSX.Element => {
  return (
    <>
      <AnnouncementBar {...announcementBarProps} />
      <Header {...headerProps} />
      <Search {...searchProps} />
    </>
  );
};
