import { useMemo } from 'react';

import { Button } from '../Button/Button';

import styles from './Headeritem.module.css';
import { HeaderItemModel } from './types';

interface HeaderProps {
  item: HeaderItemModel;
}

export const HeaderItem = ({ item }: HeaderProps): JSX.Element => {
  const component = useMemo(() => {
    switch (item.type) {
      case 'logo':
        return <div className={styles['header-item-logo']} onClick={item.callback}>{item.image?.element}</div>;
      case 'img':
        return <div style={{ width: item.image?.width }} onClick={item.callback}>{item.image?.element}</div>;
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
  }, [item.callback, item.image, item.label, item.type]);

  return <>{component}</>;
};
