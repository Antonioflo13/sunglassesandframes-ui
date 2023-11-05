import { ReactNode, useMemo } from 'react';

import { Button } from '../Button/Button';

import styles from './Headeritem.module.css';
import { HeaderItems, HeaderItemTypes } from './types';

interface HeaderProps {
  item: HeaderItems;
  children: ReactNode;
}

export const HeaderItem = ({ item, children }: HeaderProps): JSX.Element => {
  const component = useMemo(() => {
    switch (item.type) {
      case HeaderItemTypes.Img:
        return <div className={styles['header-item-logo']}>{children}</div>;
      case HeaderItemTypes.Icon:
        return (
          <>
            {item.label && (
              <Button
                type="outlined"
                label={item.label}
                fontFamily="helvetica-medium"
                callback={item.callback}
              />
            )}
          </>
        );
      default:
        return (
          <>
            {item.label && (
              <Button
                type="outlined"
                label={item.label}
                fontFamily="helvetica-medium"
                callback={item.callback}
              />
            )}
          </>
        );
    }
  }, [children, item.callback, item.label, item.type]);

  return <>{component}</>;
};
