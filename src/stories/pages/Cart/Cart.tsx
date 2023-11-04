import { AnnouncementBar } from '@blocks/AnnouncementBar';
import { Cart } from '@blocks/Cart';
import { Header } from '@blocks/Header';

import { CartPageProps } from './types';

export const CartPage = ({
  announcementBarProps,
  headerProps,
  CartProps,
}: CartPageProps): JSX.Element => {
  return (
    <>
      <AnnouncementBar {...announcementBarProps} />
      <Header {...headerProps} />
      <Cart {...CartProps} />
    </>
  );
};
