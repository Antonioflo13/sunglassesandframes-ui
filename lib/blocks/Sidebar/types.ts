import { ReactNode } from 'react';

export type SideMenuTypes = 'menu-item' | 'view-all';

export interface MenuItem {
  type: SideMenuTypes;
  label: string;
  subItems?: MenuItem[];
  wrapper?: (children: ReactNode) => JSX.Element;
  callback?: () => void;
}

export interface ViewAll {
  type: SideMenuTypes;
  label: string;
  wrapper?: (children: ReactNode) => JSX.Element;
  callback?: () => void;
}

export interface SidebarProps {
  menuItems: MenuItem[];
  viewAllLabel: ViewAll;
  className?: string;
}
