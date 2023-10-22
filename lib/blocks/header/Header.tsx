import './header.css';
import { ReactNode } from 'react';

import { HeaderItem } from '../../components/header-item/HeaderItem';
import type { HeaderItems } from '../../components/header-item/header-item-types';

interface HeaderProps {
  /**
   *  An array of header items to display in the header
   */
  items: HeaderItems[];

  /**
   *  Additional React elements or content to display inside the headerItem when HeaderItem type is img
   */
  children: ReactNode;
}

export function Header({ items, children, ...props }: HeaderProps): JSX.Element {
  return (
    <header className="header" {...props}>
      {items.splice(0, 2).map((item, idx) => (
        <HeaderItem key={idx} item={item}>
          {children}
        </HeaderItem>
      ))}
      <div>
        {items.splice(0, 2).map((item, idx) => (
          <HeaderItem key={idx} item={item}>
            {children}
          </HeaderItem>
        ))}
      </div>
    </header>
  );
}
