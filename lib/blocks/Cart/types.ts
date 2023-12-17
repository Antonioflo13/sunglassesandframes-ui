import { CartSummaryDesktopProps } from '@blocks/CartSummaryDesktop';
import { CartSummaryMobileProps } from '@blocks/CartSummaryMobile';

export type CartProduct = {
  idLineItems: string;
  quantity: number;
  id?: string;
  titleProduct: string;
  details: {
    price?: { amount: number; currencyCode: string };
  };
  image?: JSX.Element;
};

export type updateCartArgs = {
  mode: 'add' | 'remove' | 'removeAll';
  cartItem: CartProduct;
};

export type CartProps = {
  products: CartProduct[];
  icons: CartSummaryMobileProps['icons'] | CartSummaryDesktopProps['icons'];
  totalPrice: { amount: number; currencyCode: string };
  updateCart: ({ mode, cartItem }: updateCartArgs) => void;
  buttonLabel: string;
  goToCheckout: () => void;
  className?: string;
};
