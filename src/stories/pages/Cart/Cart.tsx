import { Cart } from '@blocks/Cart';
import { Header } from '@blocks/Header';
import PageWrapper from '@components/PageWrapper/PageWrapper';

import { CartPageProps } from './types';

export const CartPage = ({
  announcementBarProps,
  headerProps,
  CartProps,
}: CartPageProps): JSX.Element => {
  return (
    <PageWrapper announcementBarProps={announcementBarProps}>
      <Header {...headerProps} />
      <Cart {...CartProps} />
    </PageWrapper>
  );
};
