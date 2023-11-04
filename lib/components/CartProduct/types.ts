import { CartProduct, CartProps } from '@blocks/Cart/types';
import { ReactNode } from 'react';

export type CartProductProps = {
  children: ReactNode;
  product: CartProduct;
  updateCart: CartProps['updateCart'];
};
