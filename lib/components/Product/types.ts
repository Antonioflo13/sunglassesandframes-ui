import { ReactNode } from 'react';

export type ProductProps = {
  product: ProductModel;
  singleResult?: boolean;
};

export type ProductModel = {
  id: string;
  image: JSX.Element;
  productName: string;
  designer: string;
  price: string;
  wrapper?: (children: ReactNode) => JSX.Element;
  callback?: () => void;
  type: 'product';
};
