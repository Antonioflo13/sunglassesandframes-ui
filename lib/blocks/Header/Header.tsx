import React, { useCallback } from 'react';

import { HeaderItemModel } from '../../components/HeaderItem';
import { HeaderItem } from '../../components/HeaderItem/HeaderItem';

import styles from './Header.module.css';
import { HeaderProps } from './types';

export function Header({ blocks, className, ...props }: HeaderProps): JSX.Element {
  const component = useCallback((item: HeaderItemModel) => {
    switch (item.wrapper) {
      case undefined:
        return <HeaderItem item={item} />;
      default:
        return item.wrapper(<HeaderItem item={item} />);
    }
  }, []);

  return (
    <nav className={`${styles['header']} ${className}`} {...props}>
      <div className={styles['blocks-container']}>
        {blocks.map((block, idx) => (
          <div
            style={{ gap: block.gap }}
            className={`${styles['blocks-item']} ${styles[`blocks-${block.type}`]}`}
            key={idx}
          >
            {block.items.map((item, idx) => (
              <React.Fragment key={idx}>{component(item)}</React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
}
