import { CartProduct, CartProps } from '@blocks/Cart/types';

export type CartProductProps = {
  product: CartProduct;
  updateCart: CartProps['updateCart'];
};
