import { ReactNode } from 'react';

export interface MenuItem {
  label: string;
  subItems?: MenuItem[];
  viewAll?: MenuItem;
  wrapper?: (children: ReactNode) => JSX.Element;
  callback?: () => void;
}

export interface ViewAll {
  label: string;
  wrapper?: (children: ReactNode) => JSX.Element;
  callback?: () => void;
}

export interface SidebarProps {
  menuItems: MenuItem[];
  viewAllLabel: string;
  className?: string;
}
