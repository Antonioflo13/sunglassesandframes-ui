import { ReactNode } from 'react';

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
  icons: {
    icon: ReactNode;
    label: string;
  }[];
  totalPrice: { amount: number; currencyCode: string };
  updateCart: ({ mode, cartItem }: updateCartArgs) => void;
  buttonLabel: string;
  goToCheckout: () => void;
  className?: string;
};
