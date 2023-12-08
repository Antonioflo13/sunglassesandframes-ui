import { ReactNode } from 'react';

import { AnnouncementBarProps } from '../../blocks/AnnouncementBar';
import { HeaderProps } from '../../blocks/Header';

export interface PageWrapperProps {
  children: ReactNode;
  announcementBarProps: AnnouncementBarProps;
  withNavbar?: HeaderProps;
  withAnnouncementBar?: boolean;
  withFooter?: boolean;
  withAnimation?: boolean;
  withSpacing?: boolean;
}
