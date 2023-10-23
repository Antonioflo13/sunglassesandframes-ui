import { ReactNode, useMemo } from 'react';

import { Button } from '../button/Button';
import { HeaderItems, HeaderItemTypes } from '../header-item/header-item-types';

interface HeaderProps {
  item: HeaderItems;
  children: ReactNode;
}

export const HeaderItem = ({ item, children }: HeaderProps): JSX.Element => {
  const component = useMemo(() => {
    switch (item.type) {
      case HeaderItemTypes.Img:
        return <>{children}</>;
      case HeaderItemTypes.Icon:
        return <Button type="outlined" label={item.label} fontFamily="helvetica-medium" />;
      default:
        return <Button type="outlined" label={item.label} fontFamily="helvetica-medium" />;
    }
  }, [children, item?.label, item.type]);

  return <>{component}</>;
};
