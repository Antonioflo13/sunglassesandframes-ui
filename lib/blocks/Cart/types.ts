import { ReactNode } from 'react';

export type CartProduct = {
  idLineItems: string;
  quantity: number;
  id?: string;
  titleProduct: string;
  details: {
    price?: { amount: number; currencyCode: string };
  };
};

export type updateCartArgs = {
  mode: 'add' | 'remove' | 'removeAll';
  idLineItems: CartProduct['idLineItems'];
};

export type CartProps = {
  children: ReactNode;
  products: CartProduct[];
  icons: ReactNode[];
  totalPrice: { amount: number; currencyCode: string };
  updateCart: ({ mode, idLineItems }: updateCartArgs) => void;
  goToCheckout: () => void;
};
